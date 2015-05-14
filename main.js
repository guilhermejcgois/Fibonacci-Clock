(function () {
	function FibonacciClock(_1a, _1b, _2, _3, _5) {
		this._1a = _1a;
		this._1b = _1b;
		this._2 = _2;
		this._3 = _3;
		this._5 = _5;

		return this;
	}

	FibonacciClock.prototype.init = function () {
		this.hours = {};
		this.minutes = {};

		return this;
	}

	FibonacciClock.prototype.hoursRGB = function (r, g, b) {
		this.hours.rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
		this.hours.r = r;
		this.hours.g = g;
		this.hours.b = b;

		return this;
	}

	FibonacciClock.prototype.minutesRGB = function (r, g, b) {
		this.minutes.rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
		this.minutes.r = r;
		this.minutes.g = g;
		this.minutes.b = b;

		return this;
	}

	FibonacciClock.prototype.update = function() {
		date = new Date();
		hours = date.getHours();
		if (12 < hours) hours -= 12;
		minutes = date.getMinutes();

		f = 0;
		b = true;
		while (0 < hours) {
			switch (hours) {
				case 1:
					if (b) this._1a.style.backgroundColor = this.hours.rgb;
					else this._1b.style.backgroundColor = this.hours.rgb;
					b = !b;
					hours -= 1;
					break;
				case 2:
					this._2.style.backgroundColor = this.hours.rgb;
					hours -= 2;
					break;
				case 3:
					this._3.style.backgroundColor = this.hours.rgb;
					hours -= 3;
					break;
				case 5:
					this._5.style.backgroundColor = this.hours.rgb;
					hours -= 5;
					break;
				default:
					if (5 < hours) {
						this._5.style.backgroundColor = this.hours.rgb;
						hours -= 5;
					}
					break;
			}
		}

		b = true;
		while (5 < minutes) {
			if (25 <= minutes) {
				minutes -= 25;
				if (this._5.style.backgroundColor !== this.hours.rgb)
					this._5.style.backgroundColor = this.minutes.rgb;
				else 
					this._5.style.backgroundColor = 'rgb(' + (this.hours.r + this.minutes.r) / 2 + ',' + (this.hours.g + this.minutes.g) / 2 + ',' + (this.hours.b + this.minutes.b) / 2 + ')';
			}
			if (15 <= minutes) {
				minutes -= 15;
				if (this._3.style.backgroundColor !== this.hours.rgb)
					this._3.style.backgroundColor = this.minutes.rgb;
				else
					this._3.style.backgroundColor = 'rgb(' + (this.hours.r + this.minutes.r) / 2 + ',' + (this.hours.g + this.minutes.g) / 2 + ',' + (this.hours.b + this.minutes.b) / 2 + ')';
			}
			if (10 <= minutes) {
				minutes -= 6;
				if (this._2.style.backgroundColor !== this.hours.rgb)
					this._2.style.backgroundColor = this.minutes.rgb;
				else
					this._2.style.backgroundColor = 'rgb(' + (this.hours.r + this.minutes.r) / 2 + ',' + (this.hours.g + this.minutes.g) / 2 + ',' + (this.hours.b + this.minutes.b) / 2 + ')';
			}
			if (5 < minutes) {
				minutes -= 3;
				if(b) {
					if (this._1a.style.backgroundColor !== this.hours.rgb)
						this._1a.style.backgroundColor = this.minutes.rgb;
					else
						this._1a.style.backgroundColor = 'rgb(' + (this.hours.r + this.minutes.r) / 2 + ',' + (this.hours.g + this.minutes.g) / 2 + ',' + (this.hours.b + this.minutes.b) / 2 + ')';;
				} else if (this._1b.style.backgroundColor !== this.hours.rgb)
					this._1b.style.backgroundColor = this.minutes.rgb;
				else
					this._1b.style.backgroundColor = 'rgb(' + (this.hours.r + this.minutes.r) / 2 + ',' + (this.hours.g + this.minutes.g) / 2 + ',' + (this.hours.b + this.minutes.b) / 2 + ')';
				b = !b; 
			}
		}

		return this;
	}

	FibonacciClock.prototype.start = function (timeout = 60000) {
		this.update();

		this.timer = setTimeout(this.update(), timeout);

		return this;
	}

	FibonacciClock.prototype.stop = function () {
		clearTimeout(this.timer);

		return this;
	}

	window.FibonacciClock = window.FibonacciClock || FibonacciClock;

})(window);
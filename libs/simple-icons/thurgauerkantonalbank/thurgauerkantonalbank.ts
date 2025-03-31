import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siThurgauerkantonalbank],svg[si-thurgauerkantonalbank]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>Thurgauer Kantonalbank</svg:title>
    <svg:path
      d="M21.872 2.262H10.775l-6.14 9.743 6.14 9.771h11.097l-6.135-9.77 6.135-9.744zM0 .297v23.406h24V.297H0zm23.057 22.486L.943 22.778V1.228h22.109l.005 21.555z"
    />`,
})
export class SiThurgauerkantonalbank {
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}

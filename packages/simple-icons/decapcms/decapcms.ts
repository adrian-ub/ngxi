import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siDecapcms],svg[si-decapcms]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>Decap CMS</svg:title>
    <svg:path
      d="M18.947 13.177c0 3.263-2 5.649-4.736 5.649h-2.773v-5.65H6.282v10.387h7.93c5.403 0 9.788-4.668 9.788-10.386h-5.052ZM7.894.476 0 1.212l.948 10.352 5.157-.456-.526-5.615 2.737-.245c2.737-.246 4.91 1.93 5.227 5.193l5.052-.458c-.49-5.752-5.297-9.998-10.7-9.507Z"
    ></svg:path>`,
})
export class SiDecapcms {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}

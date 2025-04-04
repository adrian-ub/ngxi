import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siYouhodler],svg[si-youhodler]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
    '[attr.fill]': 'fill()',
  },
  template: `<svg:title>YouHodler</svg:title>
    <svg:path
      d="M4.727,15.273L1.091,13.091L1.091,4.364L8.364,0L12,2.182L15.636,0L22.909,4.364L22.909,13.091L19.273,15.273L19.273,19.636L12,24L4.727,19.636L4.727,15.273ZM12,19.636L14.422,18.182L14.422,12.364L19.273,9.455L19.273,6.545L16.85,5.092L12,8L7.15,5.092L4.727,6.545L4.727,9.455L9.578,12.364L9.578,18.182L12,19.636Z"
    ></svg:path>`,
})
export class SiYouhodler {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
  readonly fill = input('currentColor');
}

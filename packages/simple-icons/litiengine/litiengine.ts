import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[siLitiengine],svg[si-litiengine]',
  host: {
    role: 'img',
    '[attr.role]': 'role()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.xmlns]': 'xmlns()',
  },
  template: `<svg:title>LITIENGINE</svg:title>
    <svg:path
      d="m0 12.018 2.09 2.088L11.987 24l2.146-2.146-9.897-9.893 6.586-6.582-2.09-2.089Zm13.211 6.624 2.08 2.078 5.425-5.422-2.08-2.078zM9.85 2.151l6.606 6.602L9.9 15.306l2.134 2.133 6.555-6.553 3.258 3.257L24 11.993 12 0Zm-3.276 9.853 2.035 2.034 5.453-5.45-2.035-2.035z"
    ></svg:path>`,
})
export class SiLitiengine {
  readonly role = input('img');
  readonly viewBox = input('0 0 24 24');
  readonly xmlns = input('http://www.w3.org/2000/svg');
}

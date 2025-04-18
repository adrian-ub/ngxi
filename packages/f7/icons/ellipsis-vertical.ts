import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7EllipsisVerticalIcon],svg[f7-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 15.32c-2.602 0-4.687-2.086-4.687-4.734A4.67 4.67 0 0 1 28 5.899a4.67 4.67 0 0 1 4.688 4.687c0 2.648-2.086 4.734-4.688 4.734m0 17.344c-2.602 0-4.687-2.062-4.687-4.664s2.085-4.664 4.687-4.664s4.688 2.062 4.688 4.664s-2.086 4.664-4.688 4.664m0 17.438a4.686 4.686 0 0 1-4.687-4.688c0-2.648 2.085-4.734 4.687-4.734s4.688 2.086 4.688 4.734A4.686 4.686 0 0 1 28 50.102"></svg:path>`,
})
export class F7EllipsisVerticalIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}

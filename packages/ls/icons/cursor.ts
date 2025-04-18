import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCursorIcon],svg[ls-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298 312v42h42v42H213v85h42v85h43v85h-85v-85h-43v-85h-42v-42H85v42H43v43H0V57h43v42h42v43h43v42h42v43h43v42h42v43z"></svg:path>`,
})
export class LsCursorIcon {
  readonly viewBox = input("0 0 340 651")
  readonly width = input("0.53em")
  readonly height = input("1em")
}

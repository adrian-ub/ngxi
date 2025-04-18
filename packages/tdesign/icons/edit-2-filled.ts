import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEdit2FilledIcon],svg[tdesign-edit-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.038 7.573l-5.61-5.61l-4.197 4.196l5.61 5.61zm-5.611 5.611l-5.61-5.61L2 16.39V22h5.61zM12.682 22h9.542v-2h-9.542z"></svg:path>`,
})
export class TdesignEdit2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

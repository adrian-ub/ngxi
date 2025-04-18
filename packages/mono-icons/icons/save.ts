import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsSaveIcon],svg[mono-icons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h11.586A2 2 0 0 1 18 3.586l2.707 2.707A1 1 0 0 1 21 7v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 14h6v-6H9zm8 0h2V7.414l-2-2V7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5H5v14h2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zM9 5v2h6V5z"></svg:path>`,
})
export class MonoIconsSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

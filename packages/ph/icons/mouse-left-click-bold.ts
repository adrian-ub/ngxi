import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMouseLeftClickBoldIcon],svg[ph-mouse-left-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-48V36h4a44.05 44.05 0 0 1 44 44M68 80a43.6 43.6 0 0 1 2-13l33 33H68Zm48-44v43L83.49 46.52A43.83 43.83 0 0 1 112 36Zm28 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseLeftClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

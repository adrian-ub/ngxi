import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMouseRightClickBoldIcon],svg[ph-mouse-right-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m42 55a43.6 43.6 0 0 1 2 13v20h-35Zm-13.49-20.48L140 79V36h4a43.83 43.83 0 0 1 28.51 10.52M112 36h4v64H68V80a44.05 44.05 0 0 1 44-44m32 184h-32a44.05 44.05 0 0 1-44-44v-52h120v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseRightClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

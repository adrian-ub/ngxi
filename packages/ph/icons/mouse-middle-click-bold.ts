import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMouseMiddleClickBoldIcon],svg[ph-mouse-middle-click-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 68v20h-28V88a20 20 0 0 0-20-20V36h4a44.05 44.05 0 0 1 44 44m-68 12h16v40h-16Zm-8-56h4v32a20 20 0 0 0-20 20v12H68V80a44.05 44.05 0 0 1 44-44m32 184h-32a44.05 44.05 0 0 1-44-44v-52h28v12a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-12h28v52a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMouseMiddleClickBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

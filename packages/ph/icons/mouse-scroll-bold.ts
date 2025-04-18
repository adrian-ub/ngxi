import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMouseScrollBoldIcon],svg[ph-mouse-scroll-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 12h-32a68.07 68.07 0 0 0-68 68v96a68.07 68.07 0 0 0 68 68h32a68.07 68.07 0 0 0 68-68V80a68.07 68.07 0 0 0-68-68m44 164a44.05 44.05 0 0 1-44 44h-32a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h32a44.05 44.05 0 0 1 44 44Zm-48-83v70l3.51-3.52a12 12 0 0 1 17 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 163V93l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0l24 24a12 12 0 0 1-17 17Z"></svg:path>`,
})
export class PhMouseScrollBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

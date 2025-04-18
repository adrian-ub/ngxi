import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCode16Icon],svg[octicon-code-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.28 3.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215m-6.56 0a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></svg:path>`,
})
export class OcticonCode16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

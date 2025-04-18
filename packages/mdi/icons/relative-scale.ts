import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRelativeScaleIcon],svg[mdi-relative-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H4V6h16m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-8 6h-2v2h2m-4-2H6v2h2m8 2h-2v2h2m0-6h-2v2h2z"></svg:path>`,
})
export class MdiRelativeScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

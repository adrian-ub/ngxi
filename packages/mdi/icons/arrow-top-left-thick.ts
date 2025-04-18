import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopLeftThickIcon],svg[mdi-arrow-top-left-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.12 11.94v4.95H5.69V5.69h11.2v3.43h-4.95l6.37 6.38l-2.81 2.81z"></svg:path>`,
})
export class MdiArrowTopLeftThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

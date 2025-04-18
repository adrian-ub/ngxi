import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDetailsIcon],svg[mdi-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.38 6h11.25L12 16zM3 4l9 16l9-16z"></svg:path>`,
})
export class MdiDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

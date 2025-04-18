import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRayEndArrowIcon],svg[mdi-ray-end-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 12l4 4v-3h12.17c.41 1.17 1.52 2 2.83 2a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.31 0-2.42.83-2.83 2H5V8z"></svg:path>`,
})
export class MdiRayEndArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

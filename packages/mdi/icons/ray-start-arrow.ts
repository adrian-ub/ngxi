import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRayStartArrowIcon],svg[mdi-ray-start-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 12l-4 4v-3H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H19V8z"></svg:path>`,
})
export class MdiRayStartArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

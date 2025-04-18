import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRulerIcon],svg[zmdi-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 64q17 0 29.5 12.5T469 107v170q0 18-12.5 30.5T427 320H43q-18 0-30.5-12.5T0 277V107q0-18 12.5-30.5T43 64zm0 213V107h-43v85h-43v-85h-42v85h-43v-85h-43v85h-42v-85h-43v85H85v-85H43v170z"></svg:path>`,
})
export class ZmdiRulerIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

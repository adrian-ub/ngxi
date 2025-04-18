import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLayersPlusIcon],svg[mdi-layers-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zm-6 2L2 9l9-7l9 7zm0 2.54l1-.79V18c0 .71.12 1.39.35 2L11 21.07l-9-7l1.62-1.26z"></svg:path>`,
})
export class MdiLayersPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

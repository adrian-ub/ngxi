import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoMansSkyIcon],svg[arcticons-no-mans-sky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.466 18.784L24 13.689M24 44.5l12.535-25.716L24 3.5L11.466 18.784zm12.535-25.716L24 13.689M24 3.5v41"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.45a5.666 5.666 0 0 0 4.698-8.834"></svg:path>`,
})
export class ArcticonsNoMansSkyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

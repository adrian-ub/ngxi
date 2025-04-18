import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuvizEdgeIcon],svg[arcticons-muviz-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.362 15.424L16.879 5.5L6.319 42.304l29.602-18.778l-5.062-4.791"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.557 16.032L22.638 5.696L12.079 42.5l9.041-5.735m5.407-3.43l15.154-9.613l-5.398-5.109"></svg:path>`,
})
export class ArcticonsMuvizEdgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

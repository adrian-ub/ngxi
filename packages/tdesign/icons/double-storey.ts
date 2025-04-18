import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDoubleStoreyIcon],svg[tdesign-double-storey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14v2h-1v4h4v2h-1v10h1v2H2v-2h1V10H2V8h4V4H5zm3 2v4h8V4zm-3 6v10h3v-7h8v7h3V10zm9 10v-5h-4v5zM10.998 4.998h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignDoubleStoreyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

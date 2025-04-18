import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsZoomInIcon],svg[akar-icons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0ZM10.5 7v3.5m0 0V14m0-3.5H14m-3.5 0H7"></svg:path>`,
})
export class AkarIconsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

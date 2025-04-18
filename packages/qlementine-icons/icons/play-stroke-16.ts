import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPlayStroke16Icon],svg[qlementine-icons-play-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.23 1.47l6.37 4.96a2.002 2.002 0 0 1 0 3.16l-6.37 4.96C4.92 15.57 3 14.636 3 12.97V3.06C3 1.4 4.91.46 6.23 1.48zm-.614.789a.997.997 0 0 0-1.61.789v9.91c0 .832.957 1.3 1.61.789l6.37-4.96c.515-.4.515-1.18 0-1.58l-6.37-4.96z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsPlayStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

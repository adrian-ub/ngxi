import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiClockEndIcon],svg[mdi-clock-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C8.14 1 5 4.14 5 8a7 7 0 0 0 7 7c3.86 0 7-3.13 7-7c0-3.86-3.14-7-7-7m0 2.15c2.67 0 4.85 2.17 4.85 4.85s-2.18 4.85-4.85 4.85A4.85 4.85 0 0 1 7.15 8A4.85 4.85 0 0 1 12 3.15M11 5v3.69l3.19 1.84l.75-1.3l-2.44-1.41V5M15 16v3H3v2h12v3l4-4m0 0v4h2v-8h-2"></svg:path>`,
})
export class MdiClockEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

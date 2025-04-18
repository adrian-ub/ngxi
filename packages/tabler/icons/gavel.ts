import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGavelIcon],svg[tabler-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 10l7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13M6 9l4 4m3-3L9 6M3 21h7"></svg:path><svg:path d="m6.793 15.793l-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5L6 9l3-3l-.5-.5l2.293-2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414L13.5 10.5L13 10l-3 3l.5.5l-2.293 2.293a1 1 0 0 1-1.414 0"></svg:path></svg:g>`,
})
export class TablerGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

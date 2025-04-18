import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerParachuteIcon],svg[tabler-parachute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12a10 10 0 1 0-20 0"></svg:path><svg:path d="M22 12c0-1.66-1.46-3-3.25-3c-1.8 0-3.25 1.34-3.25 3c0-1.66-1.57-3-3.5-3s-3.5 1.34-3.5 3c0-1.66-1.46-3-3.25-3C3.45 9 2 10.34 2 12m0 0l10 10l-3.5-10m7 0L12 22l10-10"></svg:path></svg:g>`,
})
export class TablerParachuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

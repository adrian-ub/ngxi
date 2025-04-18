import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTemperatureSnowIcon],svg[tabler-temperature-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0zM4 9h4m6.75-5l1 2H18"></svg:path><svg:path d="m17 4l-3 5l2 3m4.25-2L19 12l1.25 2"></svg:path><svg:path d="M22 12h-6l-2 3m4 3h-2.25l-1 2"></svg:path><svg:path d="m17 20l-3-5h-1m-1-6l2.088.008"></svg:path></svg:g>`,
})
export class TablerTemperatureSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

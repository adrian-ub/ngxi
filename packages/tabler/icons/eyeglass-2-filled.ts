import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeglass2FilledIcon],svg[tabler-eyeglass-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a1 1 0 1 1 0 2H6.743l-2.24 7.467A4.5 4.5 0 0 1 10.743 15h2.513a4.502 4.502 0 0 1 6.241-2.534L17.256 5H16a1 1 0 0 1-.993-.883L15 4a1 1 0 0 1 1-1h2a1 1 0 0 1 .958.713l3 10A1 1 0 0 1 22 14v2.5a4.5 4.5 0 0 1-8.972.5h-2.056A4.5 4.5 0 0 1 2 16.5V14a1 1 0 0 1 .042-.287l3-10A1 1 0 0 1 6 3z"></svg:path>`,
})
export class TablerEyeglass2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

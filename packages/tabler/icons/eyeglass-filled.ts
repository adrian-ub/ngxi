import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeglassFilledIcon],svg[tabler-eyeglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 21A4.5 4.5 0 0 1 2 16.5v-2.518l.004-.071l.014-.103l.018-.076l3.006-10.02A1 1 0 0 1 6 3h2a1 1 0 1 1 0 2H6.743l-2.4 8H10a1 1 0 0 1 1 1v1h2v-1a1 1 0 0 1 1-1h5.656l-2.4-8H16a1 1 0 0 1-.993-.883L15 4a1 1 0 0 1 1-1h2a1 1 0 0 1 .958.713l3.01 10.036l.022.112l.008.08L22 16.5a4.5 4.5 0 0 1-8.972.5h-2.056A4.5 4.5 0 0 1 6.5 21"></svg:path>`,
})
export class TablerEyeglassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

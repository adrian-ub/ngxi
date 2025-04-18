import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrotherPrintServicePluginIcon],svg[arcticons-brother-print-service-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.917 31.98h6.169c1.173 0 1.713-.559 1.786-1.744l.605-9.783c.084-1.37-.055-2.28-.51-3.512l-2.203-5.968c-.387-1.048-.996-1.126-1.941-1.126H9.178c-.946 0-1.555.078-1.942 1.126l-2.203 5.968c-.474 1.285-.59 2.201-.51 3.512l.605 9.783c.073 1.185.614 1.744 1.786 1.744h6.17"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.083 26.092h21.835v12.06H13.083zm25.567-4.786a1.985 1.985 0 0 1-1.98 1.988h0c-1.094 0-1.981-.89-1.981-1.989s.887-1.988 1.98-1.988c1.094 0 1.98.89 1.98 1.988"></svg:path>`,
})
export class ArcticonsBrotherPrintServicePluginIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

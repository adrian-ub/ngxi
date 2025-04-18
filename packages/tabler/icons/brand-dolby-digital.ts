import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDolbyDigitalIcon],svg[tabler-brand-dolby-digital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 6v12h-.89c-3.34 0-6.047-2.686-6.047-6s2.707-6 6.046-6zM3.063 6v12h.891C7.294 18 10 15.314 10 12S7.293 6 3.954 6z"></svg:path>`,
})
export class TablerBrandDolbyDigitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHospitalizedOutline24pxIcon],svg[healthicons-hospitalized-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 4a1 1 0 0 1 1-1H20v5.764c.614.55 1 1.348 1 2.236s-.386 1.687-1 2.236V16h1v2h-1.268a2 2 0 1 1-3.465 0H7.733a2 2 0 1 1-3.465 0H3v-2h1V9.365l-.446-.628a3 3 0 0 1 4.892-3.474L10.39 8H18V5h-2.5a1 1 0 0 1-1-1M7.292 14H18v2H6v-3.82zm1.033-2l-3.14-4.42a1 1 0 0 1 1.63-1.16L9.358 10H18a1 1 0 1 1 0 2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHospitalizedOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsInpatientOutline24pxIcon],svg[healthicons-inpatient-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.446 5.263L10.39 8H18a3 3 0 0 1 2 5.236V16h1v2h-1.268a2 2 0 1 1-3.465 0H7.733a2 2 0 1 1-3.465 0H3v-2h1V9.365l-.446-.628a3 3 0 0 1 4.892-3.474M5.185 7.579L8.325 12H18a1 1 0 1 0 0-2H9.358L6.815 6.42a1 1 0 0 0-1.63 1.16M18 14H7.292L6 12.18V16h12z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsInpatientOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAndroidIcon],svg[tabler-brand-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10v6m16-6v6M7 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1za5 5 0 0 1 10 0M8 3l1 2m7-2l-1 2M9 18v3m6-3v3"></svg:path>`,
})
export class TablerBrandAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

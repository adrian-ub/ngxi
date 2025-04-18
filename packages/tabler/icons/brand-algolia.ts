import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAlgoliaIcon],svg[tabler-brand-algolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 11c-.414-1.477-1.886-2.5-3.5-2.5A3.47 3.47 0 0 0 8.5 12a3.47 3.47 0 0 0 3.5 3.5c.974 0 1.861-.357 2.5-1L19 19V4h-7c-4.386 0-8 3.582-8 8s3.614 8 8 8a7.6 7.6 0 0 0 2.998-.614"></svg:path>`,
})
export class TablerBrandAlgoliaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

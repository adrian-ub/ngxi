import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandToyotaIcon],svg[tabler-brand-toyota-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12a10 7 0 1 0 20 0a10 7 0 1 0-20 0"></svg:path><svg:path d="M9 12c0 3.866 1.343 7 3 7s3-3.134 3-7s-1.343-7-3-7s-3 3.134-3 7"></svg:path><svg:path d="M6.415 6.191C5.527 6.694 5 7.321 5 8c0 1.657 3.134 3 7 3s7-1.343 7-3c0-.678-.525-1.304-1.41-1.806"></svg:path></svg:g>`,
})
export class TablerBrandToyotaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

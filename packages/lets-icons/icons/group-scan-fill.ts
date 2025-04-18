import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGroupScanFillIcon],svg[lets-icons-group-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 3h2a2 2 0 0 1 2 2v2m-4 14h2a2 2 0 0 0 2-2v-2M7 3H5a2 2 0 0 0-2 2v2m4 14H5a2 2 0 0 1-2-2v-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m14.066 15.998l.067.002h3.734c.602 0 1.056-.532.82-1.086C18.323 14.055 17.558 13 16 13c-.857 0-1.474.32-1.917.75c.396.384.62.856.749 1.268c.157.506-.245.945-.766.98M9.917 13.75C9.474 13.32 8.857 13 8 13c-1.557 0-2.322 1.055-2.687 1.914c-.236.554.218 1.086.82 1.086h3.734q.034 0 .067-.002c-.521-.035-.923-.474-.766-.98c.128-.412.353-.884.749-1.268" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 13c1.852 0 2.56 1.143 2.832 2.018c.163.527-.28.982-.832.982h-4c-.552 0-.995-.455-.832-.982C9.44 14.143 10.148 13 12 13"></svg:path><svg:circle cx="12" cy="9" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="9" r="2" fill="currentColor"></svg:circle><svg:circle cx="8" cy="9" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsGroupScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

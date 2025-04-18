import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableHeadersEyeIcon],svg[mdi-table-headers-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6v13a2 2 0 0 0 2 2h6V11h12V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2m2 0h4v3H3m4 10H3v-3h4m0-2H3v-3h4m2-2V6h4v3m6 0h-4V6h4m-2 10a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0-3a6.45 6.45 0 0 1 6 4a6.5 6.5 0 0 1-12 0a6.45 6.45 0 0 1 6-4m0 1.5a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiTableHeadersEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

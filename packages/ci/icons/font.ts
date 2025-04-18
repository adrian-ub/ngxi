import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFontIcon],svg[ci-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 18L8 6L3 18m8-4H5m16 4v-3m0 0v-3m0 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class CiFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

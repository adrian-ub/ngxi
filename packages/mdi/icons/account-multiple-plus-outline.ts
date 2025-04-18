import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAccountMultiplePlusOutlineIcon],svg[mdi-account-multiple-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11a3 3 0 1 0-3-3a3 3 0 0 0 3 3m0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1m4.11 3.86a5 5 0 0 0 0-5.72A2.9 2.9 0 0 1 18 5a3 3 0 0 1 0 6a2.9 2.9 0 0 1-.89-.14M13 13c-6 0-6 4-6 4v2h12v-2s0-4-6-4m-4 4c0-.29.32-2 4-2c3.5 0 3.94 1.56 4 2m7 0v2h-3v-2a5.6 5.6 0 0 0-1.8-3.94C24 13.55 24 17 24 17M8 12H5v3H3v-3H0v-2h3V7h2v3h3Z"></svg:path>`,
})
export class MdiAccountMultiplePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

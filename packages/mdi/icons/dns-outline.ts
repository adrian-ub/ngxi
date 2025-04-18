import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDnsOutlineIcon],svg[mdi-dns-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15v4H5v-4zm1-2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M7 18.5A1.5 1.5 0 0 1 5.5 17A1.5 1.5 0 0 1 7 15.5A1.5 1.5 0 0 1 8.5 17A1.5 1.5 0 0 1 7 18.5M19 5v4H5V5zm1-2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M7 8.5A1.5 1.5 0 0 1 5.5 7A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 8.5 7A1.5 1.5 0 0 1 7 8.5"></svg:path>`,
})
export class MdiDnsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAuthorizedIcon],svg[hugeicons-authorized-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 17c0 2.21 1.753 4 3.916 4c1.774 0 3.272-1.205 3.754-2.857h4.19c.422 0 .448.026.448.457v1.257c0 .539 0 .808.163.976c.164.167.428.167.955.167h.761c.44 0 .659 0 .814-.13c.154-.129.197-.349.284-.789h0l.307-1.57c.069-.352.088-.368.439-.368h.752c.527 0 .791 0 .955-.168c.367-.374.332-2.183 0-2.522c-.164-.167-.428-.167-.955-.167h-9.328C10.827 13.934 9.478 13 7.916 13C5.753 13 4 14.79 4 17m4.009 0H8"></svg:path><svg:path d="M19 12.5V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v5"></svg:path></svg:g>`,
})
export class HugeiconsAuthorizedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

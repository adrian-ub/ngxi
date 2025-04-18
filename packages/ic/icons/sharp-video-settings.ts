import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoSettingsIcon],svg[ic-sharp-video-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6h18v5h2V4H1v16h11v-2H3z"></svg:path><svg:path fill="currentColor" d="M15 12L9 8v8zm7.72 5.57l1.23-.98l-1.25-2.17l-1.47.58a3.4 3.4 0 0 0-.75-.42L20.25 13h-2.5l-.24 1.58c-.26.11-.51.26-.74.42l-1.48-.58l-1.25 2.17l1.24.99c-.03.29-.04.58-.01.86l-1.23.98l1.25 2.17l1.48-.59q.345.255.75.42l.23 1.58h2.5l.24-1.58c.26-.11.51-.26.74-.42l1.48.58l1.25-2.17l-1.24-.99c.03-.28.03-.57 0-.85M19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class IcSharpVideoSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

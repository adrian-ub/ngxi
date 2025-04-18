import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siSettingsLineIcon],svg[si-settings-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsLine0)"><svg:path d="M21 10h-2.29a7.5 7.5 0 0 0-.54-1.32l1.62-1.62c.78-.78.78-2.05 0-2.83s-2.05-.78-2.83 0l-1.62 1.62c-.21-.11-.42-.21-.64-.3h-.01c-.22-.09-.44-.17-.67-.24V3c0-1.1-.9-2-2-2s-2 .9-2 2v2.29c-.23.07-.45.15-.67.24h-.01c-.22.09-.43.19-.64.3L7.08 4.21c-.78-.78-2.05-.78-2.83 0s-.78 2.05 0 2.83l1.62 1.62a7.5 7.5 0 0 0-.54 1.32H3c-1.1 0-2 .9-2 2s.9 2 2 2h2.29c.07.23.15.46.24.68s.19.44.31.65l-1.62 1.62c-.78.78-.78 2.05 0 2.83s2.05.78 2.83 0l1.62-1.62c.21.11.43.21.65.31c.22.09.45.17.68.24v2.29c0 1.1.9 2 2 2s2-.9 2-2v-2.29c.23-.07.46-.15.68-.24s.44-.19.65-.31l1.62 1.62c.78.78 2.05.78 2.83 0s.78-2.05 0-2.83l-1.62-1.62c.11-.21.21-.43.31-.65c.09-.22.17-.45.24-.68H21c1.1 0 2-.9 2-2s-.9-2-2-2z"></svg:path><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g><svg:defs><svg:clippath id="siSettingsLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiSettingsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

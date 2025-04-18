import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfQrCodeIcon],svg[wpf-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v9h9V0zm11 0v2h2V0zm2 2v2h-2v4h2V6h2V2zm0 6v3H4v2H2v2h4v-2h2v2h5v-2h2v2h3v-2h2v-2h-5V8zm7 5v2h6v-2h-2v-2h-2v2zM2 13v-2H0v2zM17 0v9h9V0zM2 2h5v5H2zm17 0h5v5h-5zM3 3v3h3V3zm17 0v3h3V3zm-9 13v2h2v-2zm2 2v2h-2v4h2v-2h4v-2h2v-2h2v2h-2v2h-2v4h2v-2h2v-2h1v2h-1v2h2v-2h1v-2h2v-4h-2v-2h-7v2zm11 6v2h2v-2zm-11 0v2h2v-2zM0 17v9h9v-9zm2 2h5v5H2zm1 1v3h3v-3z"></svg:path>`,
})
export class WpfQrCodeIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

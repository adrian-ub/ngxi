import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRainbowIcon],svg[openmoji-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M64.05 7.95v5.121c-27.56 0-51.03 23.42-51.03 50.98H7.953c0-30.99 25.11-56.1 56.1-56.1z"></svg:path><svg:path fill="#f4aa41" d="M64.05 13.07v5.12c-24.4 0-45.86 21.46-45.86 45.86h-5.178c0-27.56 23.48-50.98 51.04-50.98z"></svg:path><svg:path fill="#fcea2b" d="M64.05 18.19v5.121c-21.51 0-40.74 19.25-40.74 40.74h-5.121c0-24.4 21.46-45.86 45.86-45.86z"></svg:path><svg:path fill="#b1cc33" d="M64.05 23.31v5.121c-18.88 0-35.61 16.83-35.61 35.62h-5.131c0-21.48 19.23-40.74 40.74-40.74z"></svg:path><svg:path fill="#92d3f5" d="M64.05 28.43v5.12c-16.34 0-30.5 14.22-30.5 30.5h-5.11c0-18.78 16.73-35.62 35.61-35.62"></svg:path><svg:path fill="#b399c8" d="M64.05 33.55v5.121c-14.02 0-25.38 11.36-25.38 25.38h-5.121c0-16.28 14.16-30.5 30.5-30.5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M64.05 7.95v5.121c-27.56 0-51.04 23.42-51.04 50.98H7.947c0-30.99 25.11-56.1 56.1-56.1z"></svg:path><svg:path d="M64.05 13.07v5.12c-24.4 0-45.86 21.46-45.86 45.86h-5.174c0-27.56 23.47-50.98 51.03-50.98z"></svg:path><svg:path d="M64.05 18.19v5.121c-21.51 0-40.74 19.25-40.74 40.74h-5.121c0-24.4 21.46-45.86 45.86-45.86z"></svg:path><svg:path d="M64.05 23.31v5.121c-18.88 0-35.61 16.83-35.61 35.62h-5.131c0-21.48 19.23-40.74 40.74-40.74z"></svg:path><svg:path d="M64.05 28.43v5.12c-16.34 0-30.5 14.22-30.5 30.5h-5.11c0-18.78 16.73-35.62 35.61-35.62"></svg:path><svg:path d="M64.05 33.55v5.121c-14.02 0-25.38 11.36-25.38 25.38h-5.121c0-16.28 14.16-30.5 30.5-30.5z"></svg:path></svg:g>`,
})
export class OpenmojiRainbowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconChakrauiIcon],svg[devicon-chakraui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconChakraui0" x1="64" x2="64" y1="0" y2="128" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#7acbd4"></svg:stop><svg:stop offset="1" stop-color="#29c6b7"></svg:stop></svg:lineargradient></svg:defs><svg:circle cx="64" cy="64" r="64" fill="url(#deviconChakraui0)"></svg:circle><svg:path fill="#fff" d="M93.56 57.89a.913.913 0 0 0-.67-1.54H64.87c-1.71 0-1.43-.92-.82-2.04c.61-1.13 16.11-29.4 16.11-29.4c.07-.15.11-.3.11-.47a1.082 1.082 0 0 0-1.84-.77S34.5 67.45 34.5 67.45c-.19.18-.3.42-.3.7c0 .53.43.96.96.96h29.97c1.88 0 1.21 1.08.75 1.71s-23.15 32-23.15 32a1.129 1.129 0 0 0 .9 1.81c.31 0 .59-.12.79-.32s49.13-46.38 49.13-46.38l.01-.01l.02-.02Z"></svg:path>`,
})
export class DeviconChakrauiIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

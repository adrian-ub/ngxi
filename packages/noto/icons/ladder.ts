import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoLadderIcon],svg[noto-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:lineargradient id="notoLadder0" x1="41.441" x2="39.066" y1="113.507" y2="116.674" gradientUnits="userSpaceOnUse"><svg:stop offset=".083"></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:path fill="url(#notoLadder0)" d="m35.54 113.91l7.22 5.45v-6l-6.59-.43z" opacity=".6"></svg:path><svg:lineargradient id="notoLadder1" x1="41.441" x2="39.066" y1="83.465" y2="86.632" gradientUnits="userSpaceOnUse"><svg:stop offset=".083"></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:path fill="url(#notoLadder1)" d="m35.54 83.87l7.22 5.45v-6l-6.59-.44z" opacity=".6"></svg:path><svg:lineargradient id="notoLadder2" x1="41.441" x2="39.066" y1="53.423" y2="56.59" gradientUnits="userSpaceOnUse"><svg:stop offset=".083"></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:path fill="url(#notoLadder2)" d="m35.54 53.83l7.22 5.45v-6l-6.59-.44z" opacity=".6"></svg:path><svg:lineargradient id="notoLadder3" x1="41.441" x2="39.066" y1="23.382" y2="26.549" gradientUnits="userSpaceOnUse"><svg:stop offset=".083"></svg:stop><svg:stop offset="1" stop-opacity="0"></svg:stop></svg:lineargradient><svg:path fill="url(#notoLadder3)" d="m35.54 23.79l7.22 5.45v-6l-6.59-.44z" opacity=".6"></svg:path><svg:path fill="#9E673C" d="M95.206 124.01h-9.97V3.99h9.97z"></svg:path><svg:path fill="#E6A467" d="M100.755 3.991v120h-6.61v-120z"></svg:path><svg:path fill="#784D30" d="m92.46 113.91l-7.22 5.45v-6l6.6-.43zm0-30.04l-7.22 5.45v-6l6.6-.44zm0-30.04l-7.22 5.45v-6l6.6-.44zm0-30.04l-7.22 5.45v-6l6.6-.44z" opacity=".6"></svg:path><svg:path fill="#FFCC80" d="m92.63 19.25l-57.51.21l.62-1.54l4.99-3.67c.21-.16.47-.25.73-.25l43.39.38c.28 0 .56.1.78.28l6.52 3.3z"></svg:path><svg:path fill="#E6A467" d="M91.61 24.03H36.17c-.58 0-1.04-.47-1.04-1.04v-4.13c0-.58.47-1.04 1.04-1.04h55.44c.58 0 1.04.47 1.04 1.04v4.13c0 .58-.47 1.04-1.04 1.04"></svg:path><svg:path fill="#FFCC80" d="m92.63 109.18l-57.51.21l.62-1.54l4.99-3.67c.22-.16.47-.24.73-.24l43.39.38c.28 0 .56.1.78.28l6.52 3.3z"></svg:path><svg:path fill="#E6A467" d="M91.61 113.97H36.17c-.58 0-1.04-.47-1.04-1.04v-4.13c0-.58.47-1.04 1.04-1.04h55.44c.58 0 1.04.47 1.04 1.04v4.13c0 .58-.47 1.04-1.04 1.04"></svg:path><svg:path fill="#FFCC80" d="m92.63 79.21l-57.51.21l.62-1.54l4.99-3.67c.22-.16.47-.24.73-.24l43.39.38c.28 0 .56.1.78.28l6.52 3.3z"></svg:path><svg:path fill="#E6A467" d="M91.61 83.99H36.17c-.58 0-1.04-.47-1.04-1.04v-4.13c0-.58.47-1.04 1.04-1.04h55.44c.58 0 1.04.47 1.04 1.04v4.13c0 .58-.47 1.04-1.04 1.04"></svg:path><svg:path fill="#FFCC80" d="m92.63 49.23l-57.51.21l.62-1.54l4.99-3.67c.22-.16.47-.24.73-.24l43.39.38c.28 0 .56.1.78.28l6.52 3.3z"></svg:path><svg:path fill="#E6A467" d="M91.61 54.01H36.17c-.58 0-1.04-.47-1.04-1.04v-4.13c0-.58.47-1.04 1.04-1.04h55.44c.58 0 1.04.47 1.04 1.04v4.13c0 .58-.47 1.04-1.04 1.04"></svg:path><svg:path fill="#9E673C" d="M37.206 124.01h-9.97V3.99h9.97z"></svg:path><svg:path fill="#E6A467" d="M42.755 3.991v120h-6.61v-120z"></svg:path>`,
})
export class NotoLadderIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

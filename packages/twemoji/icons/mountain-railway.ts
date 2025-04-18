import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMountainRailwayIcon],svg[twemoji-mountain-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D1D3D4" d="M0 35h36V10S29.999 0 26.999 0S17 9 15 11s-4.5.5-6-1s-3-3-4-3s-5 7-5 7z"></svg:path><svg:path fill="#939598" d="M0 34h36v2H0z"></svg:path><svg:circle cx="11" cy="32" r="3" fill="#58595B"></svg:circle><svg:circle cx="11" cy="32" r="2" fill="#292F33"></svg:circle><svg:path fill="#58595B" d="M22 32a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path><svg:path fill="#292F33" d="M21 32a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path><svg:path fill="#FFE8B6" d="M36 14H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h29z"></svg:path><svg:path fill="#77B255" d="M36 14H7c-1.477 0-2.752.81-3.445 2H36z"></svg:path><svg:path fill="#5C913B" d="M36 28H3a4 4 0 0 0 4 4h29z"></svg:path><svg:path fill="#FFAC33" d="M3 26h33v2H3z"></svg:path><svg:path fill="#55ACEE" d="M3 19h6v5H3zm12 3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm5 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm7 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm7 0a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#66757F" d="M27.5 30h-5c-.827 0-1.5-.673-1.5-1.5v-10c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5m-5-12a.5.5 0 0 0-.5.5v10c0 .275.225.5.5.5h5c.275 0 .5-.225.5-.5v-10a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class TwemojiMountainRailwayIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

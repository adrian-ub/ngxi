import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGafiIcon],svg[token-branded-gafi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#72F34B" d="M4.421 8.21A1.42 1.42 0 0 0 3 9.633v4.736a1.42 1.42 0 0 0 1.421 1.422h6.158A1.42 1.42 0 0 0 12 14.369v-1.895a1.42 1.42 0 0 0-1.421-1.421H6.316v1.894h3.316v.474H5.368V10.58H12V8.21zm10.421 1.895h5.684v-1.42h-6.158a.95.95 0 0 0-.947.947v5.684h1.421v-2.369h5.684v-1.42h-5.684zm.474 5.495a.19.19 0 0 1-.19.19h-1.99a.19.19 0 0 1-.189-.19V9.632a1.42 1.42 0 0 1 1.421-1.421h6.443A.19.19 0 0 1 21 8.4v1.99a.19.19 0 0 1-.19.189h-5.494v.474h5.495a.19.19 0 0 1 .189.19v1.989a.19.19 0 0 1-.19.19h-5.494z"></svg:path>`,
})
export class TokenBrandedGafiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTulipIcon],svg[token-branded-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTulip0)" d="M11.486 14.751v3.317c-1.199-2.129-3.858-3.029-5.658-3.029C5.828 19.442 9.495 21 12 21c2.51 0 6.172-1.558 6.172-5.961c-1.8 0-4.46.9-5.658 3.03V14.76c-.35.17-.689.155-1.028-.01" opacity=".45"></svg:path><svg:path fill="url(#tokenBrandedTulip1)" d="M12.787 3.394c3.076 3.991 1.94 8.4-.015 11.074a.952.952 0 0 1-1.559 0c-1.975-2.618-3.307-6.887-.01-11.074a.993.993 0 0 1 1.584 0" opacity=".45"></svg:path><svg:path fill="url(#tokenBrandedTulip2)" d="M7.7 4.412c4.562 1.862 5.673 6.285 5.246 9.618a.977.977 0 0 1-1.378.76C8.6 13.542 5.427 10.528 6.296 5.179A1.014 1.014 0 0 1 7.7 4.407z" opacity=".45"></svg:path><svg:path fill="url(#tokenBrandedTulip3)" d="M17.714 5.194c.771 5.056-2.304 8.291-5.272 9.598a.977.977 0 0 1-1.384-.751c-.468-3.297.407-7.705 5.257-9.623a1.013 1.013 0 0 1 1.399.771z" opacity=".45"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTulip0" x1="6.368" x2="17.719" y1="22.774" y2="22.456" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5784C2"></svg:stop><svg:stop offset="1" stop-color="#1BE6B3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTulip1" x1="12" x2="12" y1="2.479" y2="15.393" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D141E9"></svg:stop><svg:stop offset=".5" stop-color="#5F7DC1"></svg:stop><svg:stop offset="1" stop-color="#2BD9B9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTulip2" x1="6.538" x2="13.131" y1="4.011" y2="14.95" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D141E9"></svg:stop><svg:stop offset=".5" stop-color="#5F7DC1"></svg:stop><svg:stop offset="1" stop-color="#2BD9B9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTulip3" x1="17.477" x2="10.883" y1="4.027" y2="14.966" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D141E9"></svg:stop><svg:stop offset=".5" stop-color="#5F7DC1"></svg:stop><svg:stop offset="1" stop-color="#2BD9B9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

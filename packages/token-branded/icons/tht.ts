import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedThtIcon],svg[token-branded-tht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0E134D" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#0E376B" d="M12 19.875a7.875 7.875 0 1 0 0-15.75a7.875 7.875 0 0 0 0 15.75"></svg:path><svg:path fill="#0E608C" d="M12 18.187a6.187 6.187 0 1 0 0-12.375a6.187 6.187 0 0 0 0 12.375"></svg:path><svg:path fill="#fff" d="m9.188 11.42l-.574-1.828l-.512.562l.59 1.845z"></svg:path><svg:path fill="#A5BCCA" d="m6.87 9.188l-.495.596l1.727.371l.506-.563l-1.744-.405z"></svg:path><svg:path fill="#fff" d="m12 10.86l-.573-1.829l-.512.563l.59 1.845z"></svg:path><svg:path fill="#A5BCCA" d="m9.682 8.625l-.495.596l1.727.371l.507-.562l-1.744-.405z"></svg:path><svg:path fill="#fff" d="m15.375 10.314l-.573-1.845l-.512.568l.59 1.856z"></svg:path><svg:path fill="#A5BCCA" d="m13.057 8.063l-.495.601l1.727.372l.507-.563l-1.744-.41z"></svg:path><svg:path fill="#fff" d="m14.812 13.672l-.58-1.828l-.511.562l.596 1.845z"></svg:path><svg:path fill="#A5BCCA" d="m12.478 11.438l-.5.596l1.743.371l.506-.562z"></svg:path><svg:path fill="#fff" d="m14.813 17.045l-.574-1.828l-.512.562l.59 1.845z"></svg:path><svg:path fill="#A5BCCA" d="m12.495 14.813l-.495.596l1.727.37l.506-.562l-1.744-.405z"></svg:path></svg:g>`,
})
export class TokenBrandedThtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

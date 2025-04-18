import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSiphonIcon],svg[logos-siphon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 256h129V128H0v128z" fill="#4C728C"></svg:path><svg:path d="M128 129h128V0H128v129z" fill="#6296BA"></svg:path><svg:path d="M128 256h128V128H128v128z" fill="#5884A3"></svg:path>`,
})
export class LogosSiphonIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

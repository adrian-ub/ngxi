import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFrontappIcon],svg[logos-frontapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosFrontapp0" x1="12.519%" x2="88.228%" y1="85.213%" y2="10.023%"><svg:stop offset="0%" stop-color="#FF0057" stop-opacity=".16"></svg:stop><svg:stop offset="86.135%" stop-color="#FF0057"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#001B38" d="M0 60.854C0 27.245 27.245 0 60.854 0h195.143v86.6c0 16.804-13.623 30.427-30.427 30.427h-79.762c-15.805.25-28.565 13.033-28.781 28.846v189.41c0 16.804-13.622 30.427-30.427 30.427H0z"></svg:path><svg:circle cx="147.013" cy="147.015" r="78.993" fill="url(#logosFrontapp0)" transform="rotate(90 147.013 147.015)"></svg:circle><svg:circle cx="147.013" cy="147.015" r="78.993" fill="url(#logosFrontapp0)" opacity=".5" transform="rotate(90 147.013 147.015)"></svg:circle>`,
})
export class LogosFrontappIcon {
  readonly viewBox = input("0 0 256 366")
  readonly width = input("0.7em")
  readonly height = input("1em")
}

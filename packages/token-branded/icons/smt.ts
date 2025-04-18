import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSmtIcon],svg[token-branded-smt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" d="M12.065 4L5.62 8.955L3 16.935l6.465-4.45L12.045 20l2.555-7.515l6.4 4.45l-2.475-7.98zm-.46 1.155l-5.466 4.22l-1.91 5.945l5.07-3.53zm.874 0l5.47 4.22h-.005l1.91 5.945l-5.07-3.53zM12.084 6l-2.1 5.5h4.035zm0 12l-2.1-5.5h4.035z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedSmtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

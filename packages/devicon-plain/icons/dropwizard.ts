import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainDropwizardIcon],svg[devicon-plain-dropwizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64.664 4.01c-3.29-.542-6.938 20.41-12.441 41.484c-2.253 8.633-20.356 71.397-20.356 71.397s36.41 18.067 64.266-3.407C88.869 93.987 76.113 37.741 68.58 12.9c-1.606-5.296-1.868-5.825-2.525-7.279c-.46-1.017-.921-1.534-1.39-1.611zm-5.44 44.02l3.024 5.884l-3.46 7.588l-2.8-7.887l3.237-5.586zm18.1 22.306l3.026 5.885l-3.463 7.59l-2.8-7.89zm-26.437 21.14l3.025 5.883l-3.46 7.59l-2.802-7.886l3.237-5.586z"></svg:path>`,
})
export class DeviconPlainDropwizardIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

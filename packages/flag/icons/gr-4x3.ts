import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGr4x3Icon],svg[flag-gr-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h640v53.3H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 53.3h640v53.4H0z"></svg:path><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 106.7h640V160H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 160h640v53.3H0z"></svg:path><svg:path fill="#0d5eaf" d="M0 0h266.7v266.7H0z"></svg:path><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 213.3h640v53.4H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 266.7h640V320H0z"></svg:path><svg:path fill="#0d5eaf" fill-rule="evenodd" d="M0 320h640v53.3H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M0 373.3h640v53.4H0z"></svg:path><svg:g fill="#fff" fill-rule="evenodd" stroke-width="1.3"><svg:path d="M106.7 0H160v266.7h-53.3z"></svg:path><svg:path d="M0 106.7h266.7V160H0z"></svg:path></svg:g><svg:path fill="#0d5eaf" d="M0 426.7h640V480H0z"></svg:path>`,
})
export class FlagGr4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

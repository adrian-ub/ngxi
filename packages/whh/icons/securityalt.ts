import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSecurityaltIcon],svg[whh-securityalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.95 1024q-84-42-152-89t-119-90t-89.5-102t-64-102.5T45.95 526t-26-116.5T6.45 279t-5-133T.95 0q0 26 75 45t181 19t181-19t75-45q0 26 75 45t181 19t181-19t75-45q0 98-.5 146t-5 133t-13.5 130.5t-26 116.5t-42.5 114.5t-64 102.5t-89.5 102t-119 90t-152 89m0-896q0 26-56.5 45t-135.5 19q-54 0-107-9t-85-24q0 79 2 127t9.5 114.5t22.5 109.5t43 97t68.5 94t100.5 83t138 80zm0-128"></svg:path>`,
})
export class WhhSecurityaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

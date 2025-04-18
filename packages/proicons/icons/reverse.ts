import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsReverseIcon],svg[proicons-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.005 18.323c1.019.784 2.495.057 2.495-1.229V6.906c0-1.286-1.476-2.013-2.495-1.229L11.78 10.87a1.473 1.473 0 0 0 0 2.262z"></svg:path><svg:path d="M8.754 18.323c1.02.784 2.496.057 2.496-1.229V6.906c0-1.286-1.476-2.013-2.496-1.229L2.53 10.87a1.473 1.473 0 0 0 0 2.262z"></svg:path></svg:g>`,
})
export class ProiconsReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

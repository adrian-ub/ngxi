import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAuth0Icon],svg[cib-auth0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.307 9.932L26.161 0H5.796L2.692 9.932c-1.802 5.75.042 12.271 5.089 16.021L16.01 32l8.208-6.068c5.005-3.75 6.911-10.25 5.089-16.021l-8.214 6.104l3.12 9.938l-8.208-6.13l-8.208 6.104l3.141-9.911l-8.25-6.063l10.177-.063l3.146-9.891l3.141 9.87z"></svg:path>`,
})
export class CibAuth0Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

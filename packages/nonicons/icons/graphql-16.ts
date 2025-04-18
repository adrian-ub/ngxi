import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsGraphql16Icon],svg[nonicons-graphql-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.5 5.16a.5.5 0 0 1 .252-.433l5-2.858a.5.5 0 0 1 .496 0l5 2.858a.5.5 0 0 1 .252.434v5.678a.5.5 0 0 1-.252.434l-5 2.858a.5.5 0 0 1-.496 0l-5-2.857a.5.5 0 0 1-.252-.435zM1 10.84a2 2 0 0 0 1.008 1.736l5 2.857a2 2 0 0 0 1.984 0l5-2.857A2 2 0 0 0 15 10.839V5.161a2 2 0 0 0-1.008-1.737l-5-2.857a2 2 0 0 0-1.984 0l-5 2.857A2 2 0 0 0 1 5.161z"></svg:path><svg:path d="M8 .27L1.182 11.75h13.636zm-4.182 9.98L8 3.208l4.182 7.042z"></svg:path></svg:g>`,
})
export class NoniconsGraphql16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

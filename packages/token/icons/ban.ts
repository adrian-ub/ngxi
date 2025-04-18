import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBanIcon],svg[token-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.376 17.449c-6.287.777-9.185-4.765-8.663-5.31c.333-.355.866-.377 1.332-.388c2.1-.067 5.065 2.399 5.676 2.388c1.178-.022 2.933-1.888 4.077-3.421c.488-.644 3.51-1.61 3.176.078c-1.1 5.476-4.776 6.553-5.587 6.653zM7.635 7.075c6.276-.778 9.175 4.765 8.664 5.309c-.356.367-.878.389-1.333.389c-2.11.066-5.076-2.4-5.687-2.388c-1.167.022-2.933 1.888-4.077 3.432c-.488.633-3.51 1.61-3.176-.09c1.11-5.475 4.798-6.552 5.609-6.652" clip-rule="evenodd"></svg:path>`,
})
export class TokenBanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMarshIcon],svg[token-marsh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.187 9.131L7.5 8.141v5.546c0 2.177 2.014 3.938 4.5 3.938s4.5-1.76 4.5-3.938V5.813h-6.16l2.909 1.63h1.563v6.244c0 1.238-1.26 2.25-2.812 2.25c-1.553 0-2.813-1.012-2.813-2.25zm-3.375-1.98v7.38c0 2.644 2.768 4.781 6.188 4.781s6.188-2.137 6.188-4.78V4.686H8.332L5.317 3h14.558v11.25c0 3.73-3.527 6.75-7.875 6.75s-7.875-3.02-7.875-6.75V6.161z"></svg:path>`,
})
export class TokenMarshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXchfIcon],svg[token-xchf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.75 13.07l-.497-.812L5.628 16.5h1.59L13.668 6L21 18h-9.239l-1.54-2.522l.873-1.426l1.528 2.448h5.75l-4.703-7.644L8.079 18H3l5.253-8.594l1.369 2.237z"></svg:path>`,
})
export class TokenXchfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPnkIcon],svg[token-branded-pnk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3B3B3D" d="m8.287 4.125l9.051.394L21 12.55l-5.17 7.324l-9.1-.574L3 10.611z"></svg:path><svg:path fill="url(#tokenBrandedPnk0)" d="m8.287 4.125l9.051.394L21 12.55l-5.17 7.324l-9.1-.574L3 10.611zm6.638 4.624l-6.564 2.823l5.608 4.275zM14.16 7.33L8.917 5.11L7.821 9.784zm-1.328 9.585L7.134 12.91l.141 5.428zm7.257-4.387l-3.882-3.882l-1.023 7.46zm-5.923 5.265L9.362 19.03l5.653.355l-.844-1.592zm5.163-3.505l-4.202 3.083l.833 1.609l3.375-4.692zm-1.985-8.645l-.822 1.653l3.044 3.044zm-1.018-.788l-5.344-.213l4.41 1.895l.934-1.687zm-8.826.76l-3.74 4.652l2.502.523zm-1.39 6.086l-2.514-.523l2.621 6.086l-.112-5.563z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPnk0" x1="19.594" x2="1.577" y1=".469" y2="15.33" gradientUnits="userSpaceOnUse"><svg:stop offset=".08" stop-color="#3E3E40"></svg:stop><svg:stop offset=".29" stop-color="#5B5B5D"></svg:stop><svg:stop offset=".74" stop-color="#9D9D9F"></svg:stop><svg:stop offset=".89" stop-color="#606061"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPnkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

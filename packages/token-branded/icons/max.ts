import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMaxIcon],svg[token-branded-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMax0)" fill-rule="evenodd" d="M12.946 17.9a3.21 3.21 0 0 1-4.495-.062l-4.557-4.647a3.154 3.154 0 0 1 .062-4.462a3.21 3.21 0 0 1 4.5.062l4.556 4.647a3.127 3.127 0 0 1-.061 4.462zm-7.105-6.376a.947.947 0 1 0 0-1.894a.947.947 0 0 0 0 1.894m6.892 4.117c0 .942-.772 1.705-1.72 1.705c-.947 0-1.72-.763-1.72-1.706c0-.942.773-1.705 1.72-1.705c.948 0 1.72.763 1.72 1.705" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedMax1)" fill-rule="evenodd" d="M8.797 18.153a3.805 3.805 0 0 1-.346-5.395l5.813-6.57a3.875 3.875 0 0 1 5.433-.341a3.81 3.81 0 0 1 1.095 4.106c-.164.475-.42.913-.754 1.289l-5.808 6.57a3.875 3.875 0 0 1-5.433.34m2.217-.805c.947 0 1.72-.763 1.72-1.706c0-.942-.773-1.705-1.72-1.705s-1.72.763-1.72 1.705s.773 1.706 1.72 1.706m8.09-8.432a2.131 2.131 0 1 1-4.262 0a2.131 2.131 0 0 1 4.263 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMax0" x1="18.77" x2="9.104" y1="6.666" y2="17.079" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0CB5AD"></svg:stop><svg:stop offset="1" stop-color="#9CCE7E"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMax1" x1="18.771" x2="9.105" y1="6.668" y2="17.081" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0CB5AD"></svg:stop><svg:stop offset="1" stop-color="#9CCE7E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKncIcon],svg[token-knc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.78 3.053a.265.265 0 0 0-.418.16l-1.387 7.029a.265.265 0 0 0 .39.28l6.159-3.459a.26.26 0 0 0 .134-.212a.26.26 0 0 0-.106-.228z"></svg:path><svg:path fill="currentColor" d="M10.778 3.383a.265.265 0 0 1 .419.262l-1.604 8.129a.3.3 0 0 0 0 .1l1.61 8.52a.26.26 0 0 1-.115.269a.27.27 0 0 1-.293-.002l-5.03-3.346a.26.26 0 0 1-.119-.22v-9.74c0-.083.04-.162.106-.211z"></svg:path><svg:path fill="currentColor" d="M12.355 20.784a.265.265 0 0 0 .408.171l4.974-3.309a.26.26 0 0 0 .084-.348a.26.26 0 0 0-.09-.094l-6.35-3.97a.265.265 0 0 0-.4.273zm5.593-4.69a.266.266 0 0 0 .368-.089a.3.3 0 0 0 .037-.134V8.26a.26.26 0 0 0-.131-.228a.26.26 0 0 0-.263-.002l-6.414 3.601a.27.27 0 0 0-.135.224a.26.26 0 0 0 .125.23z"></svg:path>`,
})
export class TokenKncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

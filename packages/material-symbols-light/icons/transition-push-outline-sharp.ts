import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTransitionPushOutlineSharpIcon],svg[material-symbols-light-transition-push-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.654 19v-.975h2.096V6H8.654V5h3.096v14zm5.48 0V5H22v14zm1-.975H21V6h-5.865zm-9.422-2.91l-.714-.707l1.96-1.908H2v-1h4.958l-1.96-1.883l.694-.713L8.885 12zm9.423 2.91V6z"></svg:path>`,
})
export class MaterialSymbolsLightTransitionPushOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

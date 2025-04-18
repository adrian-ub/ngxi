import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCd1x1Icon],svg[flag-cd-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCd1x10"><svg:path fill="#fff" d="M0-88h600v600H0z"></svg:path></svg:clippath></svg:defs><svg:g clip-path="url(#flagCd1x10)" transform="translate(0 75.1)scale(.853)"><svg:path fill="#007fff" d="M0-88h800v600H0z"></svg:path><svg:path fill="#f7d618" d="M36 32h84l26-84l26 84h84l-68 52l26 84l-68-52l-68 52l26-84zM750-88L0 362v150h50L800 62V-88z"></svg:path><svg:path fill="#ce1021" d="M800-88L0 392v120L800 32z"></svg:path></svg:g>`,
})
export class FlagCd1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

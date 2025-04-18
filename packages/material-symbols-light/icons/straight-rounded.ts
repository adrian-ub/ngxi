import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStraightRoundedIcon],svg[material-symbols-light-straight-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 5.883L9.716 7.667q-.131.14-.327.14q-.197 0-.346-.145q-.137-.134-.137-.341t.14-.348l2.388-2.407q.243-.243.566-.243t.566.243l2.407 2.407q.14.14.143.332q.003.191-.143.34q-.134.138-.341.138t-.347-.14L12.5 5.882V19.5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356z"></svg:path>`,
})
export class MaterialSymbolsLightStraightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

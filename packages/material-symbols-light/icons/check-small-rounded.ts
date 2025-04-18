import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCheckSmallRoundedIcon],svg[material-symbols-light-check-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 14.312l6.246-6.266q.139-.14.353-.14q.215 0 .355.139t.14.354t-.14.355l-6.389 6.369q-.242.243-.565.243t-.565-.243l-2.389-2.37q-.14-.138-.14-.352t.139-.355t.354-.14t.355.14z"></svg:path>`,
})
export class MaterialSymbolsLightCheckSmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

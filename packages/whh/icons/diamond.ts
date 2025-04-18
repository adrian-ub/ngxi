import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDiamondIcon],svg[whh-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 0l128 256H768zM576 0h256L704 256zM384 256L512 0l128 256zM192 0h256L320 256zM0 256L128 0l128 256zm448 640L0 320h256zm256-576L512 896L320 320zm320 0L576 896l192-576z"></svg:path>`,
})
export class WhhDiamondIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNinegagIcon],svg[whh-ninegag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024L0 768l192-96l256 160l256-160V448L448 576L0 352v-96L448 0l448 256v512zm192-736l-192-96l-192 96l192 96z"></svg:path>`,
})
export class WhhNinegagIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

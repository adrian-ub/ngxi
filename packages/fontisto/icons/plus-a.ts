import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPlusAIcon],svg[fontisto-plus-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 1.2h-2.4v9.6H1.2v2.4h9.6v9.6h2.4v-9.6h9.6v-2.4h-9.6z"></svg:path>`,
})
export class FontistoPlusAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrangeFrontIcon],svg[gg-arrange-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3h8v4h6v6h4v8h-8v-4H7v-6H3zm12 6H9v6h6z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrangeFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

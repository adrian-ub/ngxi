import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelListIcon],svg[raphael-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.082 4.083v3h22.835v-3zm0 16.223h22.835v-3H4.082zm0-6.612h22.835v-3H4.082zm0 13.223h22.835v-3H4.082z"></svg:path>`,
})
export class RaphaelListIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

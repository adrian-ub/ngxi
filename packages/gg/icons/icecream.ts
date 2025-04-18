import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggIcecreamIcon],svg[gg-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 17h4V8A7 7 0 1 0 5 8v9h4v3a3 3 0 1 0 6 0zm2-2V8A5 5 0 0 0 7 8v7h4v5a1 1 0 1 0 2 0v-5z" clip-rule="evenodd"></svg:path>`,
})
export class GgIcecreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

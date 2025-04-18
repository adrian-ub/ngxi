import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMinusIcon],svg[zmdi-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 213H0v-42h299z"></svg:path>`,
})
export class ZmdiMinusIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

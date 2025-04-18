import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPlusIcon],svg[zmdi-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 213H171v128h-43V213H0v-42h128V43h43v128h128z"></svg:path>`,
})
export class ZmdiPlusIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

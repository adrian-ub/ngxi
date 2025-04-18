import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTrendingFlatIcon],svg[zmdi-trending-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m405 192l-85 85v-64H0v-42h320v-64z"></svg:path>`,
})
export class ZmdiTrendingFlatIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

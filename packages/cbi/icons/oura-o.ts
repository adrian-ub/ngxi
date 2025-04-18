import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiOuraOIcon],svg[cbi-oura-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 2h8.226v1.775H7.885ZM12 5.549a8.226 8.226 0 1 0 8.226 8.225A8.226 8.226 0 0 0 12 5.549m0 14.677a6.452 6.452 0 1 1 6.452-6.452A6.45 6.45 0 0 1 12 20.226"></svg:path>`,
})
export class CbiOuraOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

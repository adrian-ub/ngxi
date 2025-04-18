import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatExpandIcon],svg[topcoat-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.391 16.17l4.439 4.439c1.13 1.131 1.57 1.101 2.67 0l6.67-6.67l5.33 5.34V1.5H22.721l5.34 5.33l-6.67 6.67c-1.08 1.08-1.112 1.561 0 2.67m-1.782 10.66l-4.439-4.439c-1.13-1.131-1.57-1.101-2.67 0l-6.67 6.67l-5.33-5.34V41.5h17.779l-5.34-5.33l6.67-6.67c1.08-1.08 1.112-1.561 0-2.67"></svg:path>`,
})
export class TopcoatExpandIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}

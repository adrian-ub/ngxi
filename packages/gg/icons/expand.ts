import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExpandIcon],svg[gg-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.306 16.593l-.035 2l-6.999-.122l.123-7l2 .036l-.063 3.585l7.894-7.624l-3.532-.061l.035-2l6.999.122l-.123 7l-2-.036l.064-3.638l-7.948 7.676z"></svg:path>`,
})
export class GgExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

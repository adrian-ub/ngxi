import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8ResizeHorizontalIcon],svg[icons8-resize-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.28 6.78l-8.5 8.5l-.686.72l.687.72l8.5 8.5l1.44-1.44L3.936 17h24.125l-6.78 6.78l1.437 1.44l8.5-8.5l.686-.72l-.687-.72l-8.5-8.5l-1.44 1.44L28.063 15H3.938l6.782-6.78z"></svg:path>`,
})
export class Icons8ResizeHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

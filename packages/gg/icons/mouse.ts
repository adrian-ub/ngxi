import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMouseIcon],svg[gg-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1"></svg:path><svg:path fill-rule="evenodd" d="M4 8a8 8 0 1 1 16 0v8a8 8 0 1 1-16 0zm14 0v8a6 6 0 0 1-12 0V8a6 6 0 1 1 12 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMouseIcon],svg[fe-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a4 4 0 0 0-4 4v8a4 4 0 1 0 8 0V8a4 4 0 0 0-4-4m0-2a6 6 0 0 1 6 6v8a6 6 0 1 1-12 0V8a6 6 0 0 1 6-6m1 8a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0z"></svg:path>`,
})
export class FeMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

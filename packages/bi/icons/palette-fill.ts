import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biPaletteFillIcon],svg[bi-palette-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08c-.124-1.101-.252-2.237.351-2.92c.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class BiPaletteFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

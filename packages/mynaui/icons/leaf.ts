import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLeafIcon],svg[mynaui-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.973 18.028c7.625 4.576 13.726-1.525 12.963-12.964C7.498 4.302 1.398 10.403 5.973 18.028m0 0L4 20m1.973-1.972L10.1 13.9"></svg:path>`,
})
export class MynauiLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

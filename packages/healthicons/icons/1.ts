import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons1Icon],svg[healthicons-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M27.765 10.152A2 2 0 0 1 29 12v24a2 2 0 0 1-4 0V16.83l-1.586 1.585a2 2 0 0 1-2.828-2.828l5-5a2 2 0 0 1 2.18-.434" clip-rule="evenodd"></svg:path>`,
})
export class Healthicons1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

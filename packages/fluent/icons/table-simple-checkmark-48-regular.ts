import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleCheckmark48RegularIcon],svg[fluent-table-simple-checkmark-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h10.5v14.25H8.5zm16.75 10.5V8.5h10.5a3.75 3.75 0 0 1 3.75 3.75v10.5zM8.5 25.25h14.25V39.5h-10.5a3.75 3.75 0 0 1-3.75-3.75zm28.88 3.616a1.25 1.25 0 0 1 0 1.768l-5.5 5.5a1.25 1.25 0 0 1-1.768 0l-2.746-2.746a1.25 1.25 0 0 1 1.768-1.768l1.862 1.862l4.616-4.616a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentTableSimpleCheckmark48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

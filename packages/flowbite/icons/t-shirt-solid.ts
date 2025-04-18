import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTShirtSolidIcon],svg[flowbite-t-shirt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.833 5a5 5 0 0 1 3-1h6.334a5 5 0 0 1 3 1L21.1 7.2a1 1 0 0 1 .268 1.296l-2 3.5a1 1 0 0 1-1.382.361l-.986-.59V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-7.234l-.985.591a1 1 0 0 1-1.383-.36l-2-3.5A1 1 0 0 1 2.9 7.2zM14 5h-4c0 .425.223.933.645 1.355c.422.423.93.645 1.355.645s.933-.222 1.355-.645C13.778 5.933 14 5.425 14 5" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteTShirtSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

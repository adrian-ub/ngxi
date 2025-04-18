import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeHexagonIcon],svg[mynaui-code-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.5 15.8V8.2a1.91 1.91 0 0 0-.944-1.645l-6.612-3.8a1.88 1.88 0 0 0-1.888 0l-6.612 3.8A1.9 1.9 0 0 0 3.5 8.2v7.602a1.91 1.91 0 0 0 .944 1.644l6.612 3.8a1.88 1.88 0 0 0 1.888 0l6.612-3.8A1.9 1.9 0 0 0 20.5 15.8"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.023 1.534 1.534 1.534 2.169s-.512 1.147-1.534 2.17l-.132.13M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.854 7.427 11.365 7.427 12s.51 1.147 1.533 2.17l.132.13"></svg:path></svg:g>`,
})
export class MynauiCodeHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

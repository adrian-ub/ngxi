import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderTwoSolidIcon],svg[mynaui-folder-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3.25A2.75 2.75 0 0 0 2.25 6v12A2.75 2.75 0 0 0 5 20.75h14A2.75 2.75 0 0 0 21.75 18V9c0-1.283-.88-2.361-2.068-2.665a3.25 3.25 0 0 0-3.183-2.586H8.325a2.75 2.75 0 0 0-1.58-.499zm11.5 2c.698 0 1.3.408 1.582 1h-6.42a1.25 1.25 0 0 1-.827-.312l-.782-.689z"></svg:path>`,
})
export class MynauiFolderTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

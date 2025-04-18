import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTetrisApp32FilledIcon],svg[fluent-tetris-app-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4.75a.75.75 0 0 1 .75-.75h5.25v6h-6zM4.75 11.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75H10v-6zm12.75 0h-6v6h5.25a.75.75 0 0 0 .75-.75zM24.25 4H19v6h5.25a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75M7 23.125C7 22.504 7.504 22 8.125 22H13v6H8.125A1.125 1.125 0 0 1 7 26.875zM20.5 28v-6h-6v6zm1.5-6h4.875c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125H22zm1.125-7.5c-.621 0-1.125.504-1.125 1.125V20.5h6v-4.875c0-.621-.504-1.125-1.125-1.125z"></svg:path>`,
})
export class FluentTetrisApp32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTetrisApp20FilledIcon],svg[fluent-tetris-app-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.75A.75.75 0 0 1 7.75 2H11v4H7zM2.75 7a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75H6V7zM11 7H7v4h3.25a.75.75 0 0 0 .75-.75zm4.25-5H12v4h3.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M4 14.75a.75.75 0 0 1 .75-.75H8v4H4.75a.75.75 0 0 1-.75-.75zM13 18v-4H9v4zm5-4v3.25a.75.75 0 0 1-.75.75H14v-4zm-3.25-5a.75.75 0 0 0-.75.75V13h4V9.75a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class FluentTetrisApp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

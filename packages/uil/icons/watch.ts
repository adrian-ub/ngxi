import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilWatchIcon],svg[uil-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.78V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3.78A3 3 0 0 0 6 9v6a3 3 0 0 0 1 2.22V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3.78A3 3 0 0 0 18 15V9a3 3 0 0 0-1-2.22M9 4h6v2H9Zm6 16H9v-2h6Zm1-5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

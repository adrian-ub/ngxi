import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitArrowDownLeftIcon],svg[uit-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.452 16.904H7.867l9.97-9.97a.546.546 0 1 0-.77-.772l-9.971 9.97V6.548a.548.548 0 0 0-1.096 0v10.904c0 .303.245.548.548.548h10.904a.548.548 0 0 0 0-1.096"></svg:path>`,
})
export class UitArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDartBoardFilledIcon],svg[tdesign-dart-board-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a5 5 0 1 1 10 0a5 5 0 0 1-10 0m5-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m0 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14"></svg:path>`,
})
export class TdesignDartBoardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

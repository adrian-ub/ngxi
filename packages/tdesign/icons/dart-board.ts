import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDartBoardIcon],svg[tdesign-dart-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-7 5a7 7 0 1 1 14 0a7 7 0 0 1-14 0m5 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignDartBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

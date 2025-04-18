import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightUpCircleIcon],svg[tdesign-arrow-right-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12a9 9 0 1 0-18 0a9 9 0 0 0 18 0M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m.768 8.819H8.525v-2h7.657v7.657h-2v-4.243l-5.364 5.364l-1.414-1.414z"></svg:path>`,
})
export class TdesignArrowRightUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

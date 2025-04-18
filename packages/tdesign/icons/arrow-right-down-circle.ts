import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArrowRightDownCircleIcon],svg[tdesign-arrow-right-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8.818.768V8.525h2v7.657H8.525v-2h4.243L7.404 8.818l1.414-1.414z"></svg:path>`,
})
export class TdesignArrowRightDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

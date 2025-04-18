import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExploreFilledIcon],svg[tdesign-explore-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-10.39 6.72l4.58-11.91l-11.91 4.58l5.392 1.939z"></svg:path>`,
})
export class TdesignExploreFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

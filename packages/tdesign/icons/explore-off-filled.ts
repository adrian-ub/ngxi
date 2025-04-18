import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExploreOffFilledIcon],svg[tdesign-explore-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l2.96 2.96A10.96 10.96 0 0 0 1 12c0 6.075 4.925 11 11 11c2.677 0 5.131-.957 7.039-2.547l2.96 2.961l1.41-1.41L2 .595zm3.276 10.8l3.392-1.304l5.242 5.242l-1.305 3.392l-1.938-5.391zm16.323 5.979A10.95 10.95 0 0 0 23 12c0-6.075-4.925-11-11-11c-1.95 0-3.781.507-5.37 1.397l6.121 6.12L17.19 6.81l-1.707 4.439z"></svg:path>`,
})
export class TdesignExploreOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

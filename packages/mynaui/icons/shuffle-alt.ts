import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiShuffleAltIcon],svg[mynaui-shuffle-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19 16.765l2 2.117L19 21m0-18l2 2.118l-2 2.117"></svg:path><svg:path d="M21 5.118h-3.15C14.62 5.118 12 8.199 12 12s2.62 6.882 5.85 6.882H21m-18 0h3.15C9.38 18.882 12 15.801 12 12S9.38 5.118 6.15 5.118H3"></svg:path></svg:g>`,
})
export class MynauiShuffleAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

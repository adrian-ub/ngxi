import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSwapVerticalCircleIcon],svg[ic-twotone-swap-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8M6.5 9L10 5.5L13.5 9H11v4H9V9zm7.5 9.5L10.5 15H13v-4h2v4h2.5z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-7V9h2.5L10 5.5L6.5 9H9v4zm4-2h-2v4h-2.5l3.5 3.5l3.5-3.5H15z"></svg:path>`,
})
export class IcTwotoneSwapVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

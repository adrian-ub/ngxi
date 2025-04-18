import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBetterInternetTilesIcon],svg[arcticons-better-internet-tiles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.534 34.58H43.5V14.364zm13.209-14.863V34.58m-21.598 0l12.896-15.555c-7.884-6.294-16.163-8.616-25.54.126z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 24.031c5.823-5.249 11.547-4.594 17.203.226"></svg:path>`,
})
export class ArcticonsBetterInternetTilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

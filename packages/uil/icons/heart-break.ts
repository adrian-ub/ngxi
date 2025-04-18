import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHeartBreakIcon],svg[uil-heart-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.46a1 1 0 0 0 1.42 0l7.45-7.46a6.27 6.27 0 0 0 0-8.87m-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 0 1 5.54-6.45l-1.71 4a1 1 0 0 0 0 .83a1 1 0 0 0 .65.53l2.77.7l-1.4 2.89a1 1 0 0 0 .46 1.34a1 1 0 0 0 .44.1a1 1 0 0 0 .9-.56l2-4a1 1 0 0 0 0-.86a1.05 1.05 0 0 0-.67-.55l-2.83-.71l1.45-3.39a4.26 4.26 0 0 1 5.92 6.13Z"></svg:path>`,
})
export class UilHeartBreakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

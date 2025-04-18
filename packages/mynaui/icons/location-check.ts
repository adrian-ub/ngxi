import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLocationCheckIcon],svg[mynaui-location-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181c5.181 5.116.056 12.196-4.773 15.64"></svg:path><svg:path d="m9.6 10.323l1.379 1.575a.3.3 0 0 0 .466-.022L14.245 8"></svg:path></svg:g>`,
})
export class MynauiLocationCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

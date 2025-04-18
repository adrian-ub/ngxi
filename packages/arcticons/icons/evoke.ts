import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEvokeIcon],svg[arcticons-evoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.628 17.933c-1.286-3.672 1.861-8.212 5.02-8.129c6.839.181 10.186 10.002 6.68 15.32m-12.025-.222c-2.624 5.631-1.223 8.26 3.305 3.416"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.973 19.994a5.2 5.2 0 0 1-1.345-2.061c8.105-3.921 11.792 8.7 2.98 10.384"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.544 34.174c-2.498 3.452.377 14.777 10.942 6.157c5.281-4.309 11.968-12.007 12.675-19.815c.49-5.418-.036-12.7-6.187-15.101c-8.749-3.417-14.712 3.494-16.433 8.229"></svg:path>`,
})
export class ArcticonsEvokeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

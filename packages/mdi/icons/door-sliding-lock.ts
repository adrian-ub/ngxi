import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoorSlidingLockIcon],svg[mdi-door-sliding-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 17v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM13 11h2v2h-2zm-4 2H7v-2h2zm4 6h-1V5h5v6.44c.61-.27 1.29-.44 2-.44V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14H2v2h11zm-3 0H5V5h5z"></svg:path>`,
})
export class MdiDoorSlidingLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

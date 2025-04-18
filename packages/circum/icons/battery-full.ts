import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumBatteryFullIcon],svg[circum-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.505 18.5H4.065a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h13.44a2 2 0 0 1 2 2v1h.93a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-.93v1a2 2 0 0 1-2 2m-13.44-12a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13.44a1 1 0 0 0 1-1v-1.25a.75.75 0 0 1 .75-.75h1.18a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1.18a.75.75 0 0 1-.75-.75V7.5a1 1 0 0 0-1-1Z"></svg:path><svg:rect width="13.437" height="8.998" x="4.063" y="7.499" fill="currentColor" rx="1"></svg:rect>`,
})
export class CircumBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBluebotIcon],svg[arcticons-bluebot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.452 24a5.25 5.25 0 0 1 0 10.5h-5.347v-21h5.347a5.25 5.25 0 0 1 0 10.5m0 0h-5.347m-7.557 0a5.25 5.25 0 1 0 0 10.5h5.347v-21h-5.347a5.25 5.25 0 0 0 0 10.5m0 0h5.347"></svg:path>`,
})
export class ArcticonsBluebotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

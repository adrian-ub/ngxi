import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons8BallPoolIcon],svg[arcticons-8-ball-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.269 24a2.25 2.25 0 0 0-2.25 2.25h0a2.25 2.25 0 0 0 2.25 2.25h1.462a2.25 2.25 0 0 0 2.25-2.25h0a2.25 2.25 0 0 0-2.25-2.25m0 0a2.25 2.25 0 0 0 2.25-2.25h0a2.25 2.25 0 0 0-2.25-2.25H23.27a2.25 2.25 0 0 0-2.25 2.25h0A2.25 2.25 0 0 0 23.27 24m-.001 0h1.462"></svg:path><svg:circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons8BallPoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

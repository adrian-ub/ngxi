import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLock2FillIcon],svg[ri-lock-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0zm-7 7.732V18h2v-2.268A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732M16 8V7a4 4 0 0 0-8 0v1z"></svg:path>`,
})
export class RiLock2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

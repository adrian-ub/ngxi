import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlashlightOff24FilledIcon],svg[fluent-flashlight-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l18.5 18.5a.75.75 0 0 0 1.06-1.06zM19.06 15l1.41-1.409a2.25 2.25 0 0 0 0-3.182L13.59 3.53a2.25 2.25 0 0 0-3.181 0l-1.41 1.41zM13 16.06L7.94 11l-4.91 4.909a2.25 2.25 0 0 0 0 3.182l1.88 1.879a2.25 2.25 0 0 0 3.182 0zm-3.47-.53l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06"></svg:path>`,
})
export class FluentFlashlightOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

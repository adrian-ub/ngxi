import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadsetAdd20FilledIcon],svg[fluent-headset-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15zm-.5 7.5a5.5 5.5 0 0 0 1.5-.207V11a2 2 0 0 1-2 2h-1a1 1 0 0 1-1-1v-1.6c.75.384 1.6.6 2.5.6m-4.247-8.995a5.5 5.5 0 0 0-.662 1.011A5 5 0 0 0 5 8h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5v1a2 2 0 0 0 2 2h1a2 2 0 1 1 .268 1H7a3 3 0 0 1-3-3V8a6 6 0 0 1 6.253-5.995"></svg:path>`,
})
export class FluentHeadsetAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

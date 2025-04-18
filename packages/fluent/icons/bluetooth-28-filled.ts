import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth28FilledIcon],svg[fluent-bluetooth-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.617 2.076a1 1 0 0 1 1.09.217l6 6a1 1 0 0 1-.067 1.475L15.562 14l5.078 4.232a1 1 0 0 1 .067 1.475l-6 6A1 1 0 0 1 13 25v-8.865l-4.36 3.633a1 1 0 1 1-1.28-1.536L12.438 14L7.36 9.768a1 1 0 1 1 1.28-1.536L13 11.865V3a1 1 0 0 1 .617-.924M15 16.135v6.45l3.519-3.518zm0-4.27l3.519-2.932L15 5.414z"></svg:path>`,
})
export class FluentBluetooth28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

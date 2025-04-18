import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSyncCircle20FilledIcon],svg[fluent-arrow-sync-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16m3.5-8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.696a3.498 3.498 0 0 0-5.609-.53a.5.5 0 1 0 .746.667A2.5 2.5 0 0 1 12.293 9H11.5a.5.5 0 1 0 0 1zm-7.5.5v2a.5.5 0 0 0 1 0v-.696a3.498 3.498 0 0 0 5.609.53a.5.5 0 0 0-.745-.668A2.5 2.5 0 0 1 7.708 11H8.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentArrowSyncCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlow32FilledIcon],svg[fluent-flow-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.09 10.5H19a2 2 0 0 0-2 2v7a4 4 0 0 1-4 4h-.09A5.502 5.502 0 0 1 2 22.5a5.5 5.5 0 0 1 10.91-1H13a2 2 0 0 0 2-2v-7a4 4 0 0 1 4-4h.09A5.502 5.502 0 0 1 30 9.5a5.5 5.5 0 0 1-10.91 1"></svg:path>`,
})
export class FluentFlow32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

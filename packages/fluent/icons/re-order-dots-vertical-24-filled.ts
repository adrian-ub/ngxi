import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsVertical24FilledIcon],svg[fluent-re-order-dots-vertical-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class FluentReOrderDotsVertical24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

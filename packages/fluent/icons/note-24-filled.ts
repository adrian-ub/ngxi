import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote24FilledIcon],svg[fluent-note-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25V13h-4.75A3.25 3.25 0 0 0 13 16.25V21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm2.81 11.5l-6.06 6.06v-4.31c0-.966.784-1.75 1.75-1.75z"></svg:path>`,
})
export class FluentNote24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

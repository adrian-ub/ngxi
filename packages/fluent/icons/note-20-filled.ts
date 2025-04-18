import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote20FilledIcon],svg[fluent-note-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a3 3 0 0 1 2.995 2.824L17 6v4h-4l-.176.005a3 3 0 0 0-2.819 2.819L10 13v4H6a3 3 0 0 1-2.995-2.824L3 14V6a3 3 0 0 1 2.824-2.995L6 3zm2.9 8.001a2 2 0 0 1-.358.652l-.128.14l-4.621 4.621c-.224.224-.496.39-.792.487L11 13l.005-.15a2 2 0 0 1 1.838-1.844L13 11z"></svg:path>`,
})
export class FluentNote20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

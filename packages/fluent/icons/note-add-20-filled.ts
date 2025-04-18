import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNoteAdd20FilledIcon],svg[fluent-note-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V5H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H6zM5.5 11a5.5 5.5 0 0 0 4.9-8H14a3 3 0 0 1 2.995 2.824L17 6v4h-4l-.176.005a3 3 0 0 0-2.819 2.819L10 13v4H6a3 3 0 0 1-2.995-2.824L3 14v-3.6c.75.384 1.6.6 2.5.6m11.4.001a2 2 0 0 1-.358.652l-.128.14l-4.621 4.621c-.224.224-.496.39-.792.487L11 13l.005-.15a2 2 0 0 1 1.838-1.844L13 11z"></svg:path>`,
})
export class FluentNoteAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

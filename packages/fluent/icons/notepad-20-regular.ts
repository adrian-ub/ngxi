import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotepad20RegularIcon],svg[fluent-notepad-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM7 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1-11a.5.5 0 0 0-.5.5V3h-.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h6a.5.5 0 0 0 .354-.146l4-4A.5.5 0 0 0 16 13.5v-9A1.5 1.5 0 0 0 14.5 3H14v-.5a.5.5 0 0 0-1 0V3h-2.5v-.5a.5.5 0 0 0-1 0V3H7v-.5a.5.5 0 0 0-.5-.5m8 2a.5.5 0 0 1 .5.5V13h-2.5a1.5 1.5 0 0 0-1.5 1.5V17H5.5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5zm-.207 10L12 16.293V14.5a.5.5 0 0 1 .5-.5z"></svg:path>`,
})
export class FluentNotepad20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

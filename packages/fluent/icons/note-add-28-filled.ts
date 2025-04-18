import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNoteAdd28FilledIcon],svg[fluent-note-add-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7.5a7.5 7.5 0 0 1-12 6v7.75A3.75 3.75 0 0 0 6.75 25H15v-6.25A3.75 3.75 0 0 1 18.75 15H25V6.75A3.75 3.75 0 0 0 21.25 3H13.5A7.47 7.47 0 0 1 15 7.5M16.56 25h-.06v-6.25a2.25 2.25 0 0 1 2.25-2.25H25v.06zM7.5 14a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m0-11a.5.5 0 0 1 .5.5V7h3.5a.5.5 0 0 1 0 1H8v3.5a.5.5 0 0 1-1 0V8H3.5a.5.5 0 0 1 0-1H7V3.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentNoteAdd28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

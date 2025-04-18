import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QuickNoteIcon],svg[fluent-mdl2-quick-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 128v1792H640l-512-512V128zM640 1739v-331H309zM1792 256H256v1024h512v512h1024z"></svg:path>`,
})
export class FluentMdl2QuickNoteIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}

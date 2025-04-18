import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NoteForwardIcon],svg[fluent-mdl2-note-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2042 1600l-317 317l-90-90l163-163h-518v-128h518l-163-163l90-90zm-666 192l127 128H677l-549-549V128h1792v1123l-128-128V256H256v1024h512v512zm-736-384H347l293 293z"></svg:path>`,
})
export class FluentMdl2NoteForwardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}

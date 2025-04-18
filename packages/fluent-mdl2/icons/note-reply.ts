import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2NoteReplyIcon],svg[fluent-mdl2-note-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1536q53 0 99 20t82 55t55 81t20 100q0 53-20 99t-55 82t-81 55t-100 20v-128q27 0 50-10t40-27t28-41t10-50q0-27-10-50t-27-40t-41-28t-50-10h-293l162 163l-90 90l-317-317l317-317l90 90l-162 163zm-573 256l128 128H677l-549-549V128h1792v1278l-128-128V256H256v1024h512v512zm-579-384H347l293 293z"></svg:path>`,
})
export class FluentMdl2NoteReplyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}

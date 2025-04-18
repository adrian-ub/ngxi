import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileQuestionOutlineIcon],svg[mdi-file-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8zm4 18H6V4h7v5h5zm-3-7c0 1.89-2.25 2.07-2.25 3.76h-1.5c0-2.44 2.25-2.26 2.25-3.76c0-.82-.67-1.5-1.5-1.5s-1.5.68-1.5 1.5H9c0-1.65 1.34-3 3-3s3 1.35 3 3m-2.25 4.5V19h-1.5v-1.5z"></svg:path>`,
})
export class MdiFileQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

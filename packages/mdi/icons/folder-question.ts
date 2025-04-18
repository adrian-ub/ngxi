import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderQuestionIcon],svg[mdi-folder-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-3.2 12h-1.5v-1.5h1.5zm0-2.2h-1.5c0-2.4 2.2-2.3 2.2-3.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5H13c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.9-2.2 2.1-2.2 3.8"></svg:path>`,
})
export class MdiFolderQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

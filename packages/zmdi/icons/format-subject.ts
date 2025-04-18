import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFormatSubjectIcon],svg[zmdi-format-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 299v42H0v-42zm128-171v43H0v-43zM0 256v-43h341v43zM0 43h341v42H0z"></svg:path>`,
})
export class ZmdiFormatSubjectIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

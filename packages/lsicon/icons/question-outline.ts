import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconQuestionOutlineIcon],svg[lsicon-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 6v-.25A3.25 3.25 0 0 1 7.75 2.5h.543A2.707 2.707 0 0 1 11 5.207v.772c0 .878-.634 1.627-1.5 1.771S8 8.643 8 9.52V11m0 1.75h.005v.005H8zm.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0Z"></svg:path>`,
})
export class LsiconQuestionOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

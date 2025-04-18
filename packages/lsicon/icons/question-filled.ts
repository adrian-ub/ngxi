import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconQuestionFilledIcon],svg[lsicon-question-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 3A2.75 2.75 0 0 0 5 5.75V6H4v-.25A3.75 3.75 0 0 1 7.75 2h.543A3.207 3.207 0 0 1 11.5 5.207v.772c0 1.122-.811 2.08-1.918 2.264A1.295 1.295 0 0 0 8.5 9.521V11h-1V9.52c0-1.121.811-2.079 1.918-2.263A1.295 1.295 0 0 0 10.5 5.979v-.772A2.207 2.207 0 0 0 8.293 3zm-.5 9.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconQuestionFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

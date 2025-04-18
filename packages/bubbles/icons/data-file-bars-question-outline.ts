import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDataFileBarsQuestionOutlineIcon],svg[bubbles-data-file-bars-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-width="1.5" clip-path="url(#bubblesDataFileBarsQuestionOutline0)"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.25 23.75a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.375 16.625A1.875 1.875 0 1 1 17.25 18.5"></svg:path><svg:path d="M17.25 21.5a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.75 14.75h4.5m0 0v-7.5m3 3v-1.5m-6 6v-4.5m2.25 10.5H2.25a1.5 1.5 0 0 1-1.5-1.5V2.75a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.06.439l2.872 2.872a1.5 1.5 0 0 1 .439 1.06V8"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesDataFileBarsQuestionOutline0"><svg:path fill="#fff" d="M0 .5h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesDataFileBarsQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

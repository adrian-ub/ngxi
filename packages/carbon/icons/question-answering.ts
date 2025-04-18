import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonQuestionAnsweringIcon],svg[carbon-question-answering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.18l-2.59-2.59L16 14l4 4l6-6l-1.41-1.41zM8 18h2v2H8zm4-9H7v2h4v2H8v3h2v-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6c1.107 0 2-.893 2-2V8c0-1.107-.893-2-2-2H6c-1.107 0-2 .893-2 2v12c0 1.107.893 2 2 2h9v2H6a4 4 0 0 1-4-4V8c0-2.21 1.79-4 4-4h20c2.21 0 4 1.79 4 4v12a4 4 0 0 1-4 4h-4.835z"></svg:path>`,
})
export class CarbonQuestionAnsweringIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorQuestionCircle32Icon],svg[fluent-color-question-circle-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorQuestionCircle320)" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></svg:path><svg:path fill="url(#fluentColorQuestionCircle321)" d="M17.5 22a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14 12c0-.537.18-1.041.497-1.398c.301-.339.774-.602 1.503-.602c1.308 0 2.382 1.348 2.03 2.758c-.18.722-.61 1.135-1.257 1.756l-.178.17C15.866 15.39 15 16.328 15 18a1 1 0 1 0 2 0c0-.827.353-1.267.985-1.877l.191-.182c.614-.58 1.466-1.385 1.794-2.699C20.618 10.653 18.692 8 16 8c-1.271 0-2.298.487-2.997 1.273C12.32 10.041 12 11.037 12 12a1 1 0 1 0 2 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorQuestionCircle320" x1="2" x2="30" y1="2" y2="30" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorQuestionCircle321" x1="12.708" x2="17.351" y1="8.272" y2="23.906" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorQuestionCircle32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuiz04Icon],svg[hugeicons-quiz-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 14v-3.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C17.502 4 16.335 4 14 4a2 2 0 1 0-4 0c-2.335 0-3.502 0-4.386.472a4 4 0 0 0-1.642 1.642C3.5 6.998 3.5 8.165 3.5 10.5V14c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172S20.5 17.771 20.5 14m-14-4h4"></svg:path><svg:path d="M13.5 11s.5 0 1 1c0 0 1.588-2.5 3-3m-11 7h4m3 1s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path></svg:g>`,
})
export class HugeiconsQuiz04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

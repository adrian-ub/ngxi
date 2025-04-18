import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsQuestionFillIcon],svg[lets-icons-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-8 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 5a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2h.094C13.147 7 14 7.853 14 8.906v.513c0 .514-.329.97-.816 1.132A3.19 3.19 0 0 0 11 13.581V16h2v-2.419c0-.514.329-.97.816-1.132A3.19 3.19 0 0 0 16 9.419v-.513A3.906 3.906 0 0 0 12.094 5z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsQuestionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

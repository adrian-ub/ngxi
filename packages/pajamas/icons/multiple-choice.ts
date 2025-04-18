import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMultipleChoiceIcon],svg[pajamas-multiple-choice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 9.354L6.188 7.5h3.624zM4.285 7.699C3.666 7.066 4.115 6 5.001 6h5.998c.886 0 1.335 1.066.716 1.699l-3 3.07a1 1 0 0 1-1.43 0z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasMultipleChoiceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

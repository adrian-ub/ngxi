import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDCircleIcon],svg[mynaui-letter-d-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9.5 15.5v-7A.5.5 0 0 1 10 8h2a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 12 16h-2a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class MynauiLetterDCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterRCircleIcon],svg[mynaui-letter-r-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9.75 12V8.5a.5.5 0 0 1 .5-.5h3a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H11.5m-1.75 0v4m0-4h1.75m0 0l3 4"></svg:path></svg:g>`,
})
export class MynauiLetterRCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

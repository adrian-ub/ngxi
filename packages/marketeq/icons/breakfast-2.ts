import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBreakfast2Icon],svg[marketeq-breakfast-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 21.75c-4.792-1.062-6.25-7.167-10.896-4.312c-5.084 3.395-1.604 7.562.125 10.291s3.646 7.73 9.25 4.584c3.666-2.084 5.666-1.209 6.562-4.73c.896-3.52-2.395-5.229-5.041-5.833"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqBreakfast2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

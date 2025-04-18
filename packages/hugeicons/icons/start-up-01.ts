import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStartUp01Icon],svg[hugeicons-start-up-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.295 17C3.53 7.25 8.863 2.938 12 2c3.137.938 8.47 5.25 4.705 15c-.568-.312-2.305-.937-4.705-.937s-4.137.625-4.705.937"></svg:path><svg:path d="M14 9a2 2 0 1 0-4 0a2 2 0 0 0 4 0m3.5 6.558c1.442.133 3.208.524 4.481 1.442c0 0 .523-4.936-3.981-6M6.5 15.558c-1.442.133-3.208.524-4.481 1.442c0 0-.523-4.936 3.981-6m3.5 8s.417 2.5 2.5 3c2.083-.5 2.5-3 2.5-3"></svg:path></svg:g>`,
})
export class HugeiconsStartUp01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

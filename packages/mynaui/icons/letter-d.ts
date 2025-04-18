import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterDIcon],svg[mynaui-letter-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 16.375v-8.75C8 7.28 8.28 7 8.625 7h2.5a4.375 4.375 0 0 1 4.375 4.375v1.25A4.375 4.375 0 0 1 11.125 17h-2.5A.625.625 0 0 1 8 16.375"></svg:path>`,
})
export class MynauiLetterDIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

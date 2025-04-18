import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterGIcon],svg[mynaui-letter-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.167 12h1.458c.345 0 .625.28.625.625v3.75c0 .345-.28.625-.625.625h-3.75A1.875 1.875 0 0 1 9 15.125v-6.25C9 7.839 9.84 7 10.875 7h2.5c1.036 0 1.875.84 1.875 1.875"></svg:path>`,
})
export class MynauiLetterGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

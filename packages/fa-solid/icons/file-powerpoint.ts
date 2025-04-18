import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidFilePowerpointIcon],svg[fa-solid-file-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M193.7 271.2c8.8 0 15.5 2.7 20.3 8.1c9.6 10.9 9.8 32.7-.2 44.1c-4.9 5.6-11.9 8.5-21.1 8.5h-26.9v-60.7zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9m-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24m53 165.2c0 90.3-88.8 77.6-111.1 77.6V436c0 6.6-5.4 12-12 12h-30.8c-6.6 0-12-5.4-12-12V236.2c0-6.6 5.4-12 12-12h81c44.5 0 72.9 32.8 72.9 77"></svg:path>`,
})
export class FaSolidFilePowerpointIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

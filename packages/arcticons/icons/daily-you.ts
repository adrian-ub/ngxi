import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailyYouIcon],svg[arcticons-daily-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.917 32.598v.809a1.3 1.3 0 0 0 1.293 1.3h25.58a1.3 1.3 0 0 0 1.293-1.3v-.809m0-14.444v-1.517c0-.714-.578-1.293-1.292-1.293h-6.334l-2.001-2.051h-8.912l-2 2.051h-6.335c-.714 0-1.292.579-1.292 1.293v1.517"></svg:path><svg:circle cx="24" cy="25.015" r="5.417" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.667 19.598v5.417a5.417 5.417 0 0 0 10.833 0v-5.417m-39 0a5.417 5.417 0 0 0 10.833 0M9.917 30.431v-5.416"></svg:path>`,
})
export class ArcticonsDailyYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

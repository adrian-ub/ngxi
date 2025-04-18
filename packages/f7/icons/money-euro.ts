import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyEuroIcon],svg[f7-money-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M34.693 32.93h-12c1.442 4.95 5.39 7.515 10.425 7.515c1.597 0 3.46-.137 4.348-.386v4.336c-.954.272-2.795.454-4.348.454c-7.674 0-13.863-4.087-15.549-11.918H13v-2.566h4.192a18 18 0 0 1-.088-1.93c0-.68.022-1.339.088-1.974H13v-2.566h4.57C19.254 16.064 25.465 12 33.095 12c1.508 0 3.438.227 4.348.522v4.313c-.954-.227-2.773-.408-4.304-.408c-5.012 0-8.983 2.542-10.425 7.468h11.978v2.566H22.205a19 19 0 0 0-.11 1.975c0 .68.044 1.316.088 1.93h12.51z"></svg:path>`,
})
export class F7MoneyEuroIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}

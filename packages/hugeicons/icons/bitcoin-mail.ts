import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoinMailIcon],svg[hugeicons-bitcoin-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5 7l-1.218.813c-.874.582-1.311.873-1.548 1.317c-.237.445-.235.967-.231 2.01c.004 1.258.016 2.538.048 3.834c.077 3.075.115 4.612 1.246 5.742c1.13 1.13 2.688 1.17 5.804 1.248a116 116 0 0 0 5.799 0c3.116-.078 4.674-.117 5.804-1.248c1.13-1.13 1.169-2.667 1.246-5.742c.032-1.296.044-2.576.048-3.833c.003-1.044.005-1.566-.232-2.01c-.236-.445-.673-.736-1.547-1.318L19 7"></svg:path><svg:path d="m2 10l6.913 4.148C10.417 15.05 11.169 15.5 12 15.5s1.583-.45 3.087-1.353L22 10"></svg:path><svg:path d="M5 12V6c0-1.886 0-2.828.586-3.414S7.114 2 9 2h6c1.886 0 2.828 0 3.414.586S19 4.114 19 6v6"></svg:path><svg:path d="M10.438 11.167V5.833m1.562 0V4.5m0 8v-1.333M10.438 8.5h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H9.5M13.563 8.5c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H9.5"></svg:path></svg:g>`,
})
export class HugeiconsBitcoinMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

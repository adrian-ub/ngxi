import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClipIcon],svg[hugeicons-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 22h3.144c.371 0 .523-.333.593-.683C7.89 20.547 8.498 20 9.2 20s1.31.547 1.463 1.317c.07.35.222.683.593.683h1.488c.371 0 .523-.333.593-.683c.154-.77.761-1.317 1.463-1.317s1.31.547 1.463 1.317c.07.35.222.683.593.683H20M8.772 20s.85-8.18 1.165-10.52c.271-2.017-3.503-4.76-1.175-6.386c2.09-1.459 4.386-1.458 6.476 0c2.328 1.625-1.445 4.369-1.174 6.385C14.378 11.82 15.228 20 15.228 20"></svg:path><svg:path d="m5 22l-1.323-4.837c-.663-2.84-.994-4.26-.262-5.212C4.148 11 5.574 11 8.425 11h7.15c2.851 0 4.277 0 5.01.951c.732.952.4 2.372-.262 5.212L19 22"></svg:path></svg:g>`,
})
export class HugeiconsClipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

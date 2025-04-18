import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAtomIcon],svg[marketeq-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M24.896 25h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 25c0 10.417-3.729 18.75-8.333 18.75S16.667 35.417 16.667 25S20.396 6.25 25 6.25s8.333 8.333 8.333 18.75M8.854 34.896c2.292 4.166 11.375 3.208 20.292-2.271c8.917-5.48 14.27-13.312 12-17.52c-2.271-4.21-11.375-3.21-20.313 2.27S6.583 30.688 8.854 34.895m32.292 0c2.27-4.167-3.084-12.042-12-17.521s-18-6.5-20.292-2.27c-2.291 4.228 3.084 11.978 11.98 17.52c8.895 5.542 18.02 6.5 20.312 2.27"></svg:path></svg:g>`,
})
export class MarketeqAtomIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

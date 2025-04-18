import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPhoneSquareIcon],svg[marketeq-phone-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m34.042 34.438l.895-1.376a2.897 2.897 0 0 0-1.062-4.166a26 26 0 0 1-1.5-.854a2.917 2.917 0 0 0-3.917.75l-2.666 3.791a19.6 19.6 0 0 0 6.25 2.792a1.71 1.71 0 0 0 2-.937M14.583 17.854a19.6 19.6 0 0 0 2.792 6.25l3.792-2.666a2.916 2.916 0 0 0 .75-3.917c-.292-.48-.584-.98-.855-1.5a2.895 2.895 0 0 0-4.166-1.063l-1.375.896a1.71 1.71 0 0 0-.938 2m11.209 14.729a28 28 0 0 1-4.625-3.75a28 28 0 0 1-3.75-4.625"></svg:path><svg:path stroke="#306CFE" d="M39.583 6.25H10.417a4.167 4.167 0 0 0-4.167 4.167v29.166a4.167 4.167 0 0 0 4.167 4.167h29.166a4.167 4.167 0 0 0 4.167-4.167V10.417a4.167 4.167 0 0 0-4.167-4.167"></svg:path></svg:g>`,
})
export class MarketeqPhoneSquareIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

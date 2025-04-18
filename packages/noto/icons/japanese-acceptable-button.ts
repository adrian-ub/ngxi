import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoJapaneseAcceptableButtonIcon],svg[noto-japanese-acceptable-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoJapaneseAcceptableButton0" fill="#FFBD52" d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3"></svg:path></svg:defs><svg:circle cx="63.93" cy="64" r="60" fill="#F77E00"></svg:circle><svg:circle cx="60.03" cy="63.1" r="56.1" fill="#FF9800"></svg:circle><svg:use href="#notoJapaneseAcceptableButton0" opacity=".65"></svg:use><svg:path fill="#FAFAFA" d="M102.23 38h-6.8c-1.1 0-2 .9-2 2v55.4c0 5.4-1.4 8.3-5.2 9.5c-3.7 1.4-9.5 1.6-17.8 1.6c-.87 0-1.64-.57-1.9-1.4c-.5-1.6-1.1-3.17-1.8-4.7c-.44-1.01.02-2.19 1.03-2.63c.27-.12.57-.18.87-.17c5.8.2 11.4.1 13.3.1s2.6-.6 2.6-2.5V39.9c0-1.1-.9-2-2-2h-57c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2h76.6c1.1 0 2 .9 2 2v4.4c.11 1.1-.69 2.08-1.79 2.19c-.04.01-.08.01-.11.01m-61.5 48v3.1c0 1.1-.9 2-2 2h-4.2c-1.1 0-2-.9-2-2V51.8c0-1.1.9-2 2-2h33.4c1.1 0 2 .9 2 2V82c0 1.1-.9 2-2 2h-25.2a2 2 0 0 0-2 2m0-26.2V74c0 1.1.9 2 2 2h16.9c1.1 0 2-.9 2-2V59.8c0-1.1-.9-2-2-2h-16.9a2 2 0 0 0-2 2"></svg:path><svg:use href="#notoJapaneseAcceptableButton0" opacity=".3"></svg:use>`,
})
export class NotoJapaneseAcceptableButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

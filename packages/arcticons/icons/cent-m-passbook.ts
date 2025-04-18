import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCentMPassbookIcon],svg[arcticons-cent-m-passbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.407 33.217H7.211a2.71 2.71 0 0 1-2.678-3.128L6.92 14.783H43.5l-2.533 16.243a2.59 2.59 0 0 1-2.56 2.19M14.418 18.197h19.164m-14.996 3.521h10.828"></svg:path>`,
})
export class ArcticonsCentMPassbookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

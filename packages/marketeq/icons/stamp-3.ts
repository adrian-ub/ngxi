import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqStamp3Icon],svg[marketeq-stamp-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 41.667H16.667v2.083h16.666z"></svg:path><svg:path stroke="#306CFE" d="M20.833 29.167h8.334a26.1 26.1 0 0 1 3.208-10.792A8.333 8.333 0 1 0 16.917 12.5a8.33 8.33 0 0 0 .687 5.917a26.9 26.9 0 0 1 3.23 10.75m13.271 1.729a2.084 2.084 0 0 0-2.083-1.73H18.063a2.08 2.08 0 0 0-2.084 1.73l-1.396 8.333a2.084 2.084 0 0 0 2.084 2.438h16.666a2.083 2.083 0 0 0 2.084-2.438z"></svg:path></svg:g>`,
})
export class MarketeqStamp3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

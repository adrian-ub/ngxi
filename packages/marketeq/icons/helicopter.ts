import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHelicopterIcon],svg[marketeq-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M12.5 6.25h25zm2.083 37.5H43.75zM25 6.25v8.333zm8.333 29.167H25v8.333h8.333z"></svg:path><svg:path stroke="#306CFE" d="M25 14.583V25a2.083 2.083 0 0 0 2.083 2.083h16.521"></svg:path><svg:path stroke="#306CFE" d="M6.25 16.667v4.166a2.083 2.083 0 0 0 2.083 2.084h4.75a2.084 2.084 0 0 1 2.084 1.416l1.791 5.375a8.33 8.33 0 0 0 7.792 5.709h16.917a2.083 2.083 0 0 0 2.083-2.084v-6.25l-3.937-7.896a8.33 8.33 0 0 0-7.459-4.604H8.334a2.083 2.083 0 0 0-2.084 2.084"></svg:path></svg:g>`,
})
export class MarketeqHelicopterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyEopIcon],svg[cryptocurrency-eop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 32C8.163 32 1 24.837 1 16S8.163 0 17 0s16 7.163 16 16s-7.163 16-16 16m-1.286-4l-5.348-14.263l-2.16 9.84zM17.12 4.171l-5.863 7.132l5.863 14.983l5.897-14.983L17.12 4.17zM18.56 28l7.474-4.423l-2.125-9.84z"></svg:path>`,
})
export class CryptocurrencyEopIcon {
  readonly viewBox = input("1 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

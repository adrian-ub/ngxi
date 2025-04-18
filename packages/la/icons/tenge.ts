import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTengeIcon],svg[la-tenge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.633 5A.625.625 0 0 0 6 5.621v2.746c0 .348.285.633.633.633h18.746A.625.625 0 0 0 26 8.367V5.621A.616.616 0 0 0 25.379 5zm0 7a.63.63 0 0 0-.633.621v2.746c0 .348.285.633.633.633H14v11.379c0 .347.274.621.621.621h2.758a.616.616 0 0 0 .621-.621V16h7.379a.625.625 0 0 0 .621-.633v-2.746a.62.62 0 0 0-.621-.621z"></svg:path>`,
})
export class LaTengeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNewspaperIcon],svg[openmoji-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M58.904 56h2.442C63.034 56 64 54.993 64 53.337V10.958H13.04v13.278"></svg:path><svg:path fill="#9B9B9A" d="M59 56h2.396C63.053 56 64 54.993 64 53.337V10.958H14v16.154"></svg:path><svg:path fill="#9B9B9A" d="M59 56h2.396C63.053 56 64 54.993 64 53.337V10.958H14"></svg:path><svg:path fill="#D0CFCE" d="M9 16h50v40H9z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59 56h2.396C63.053 56 64 54.993 64 53.337V10.958H14"></svg:path><svg:path d="M9 16h50v40H9z"></svg:path><svg:path d="M14 27.112h20.004v20.004H14zm0-5.113h40m-14.432 6.113H54m-14.432 6.367H54m-14.432 6.367H54m-14.432 6.367H54"></svg:path></svg:g>`,
})
export class OpenmojiNewspaperIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

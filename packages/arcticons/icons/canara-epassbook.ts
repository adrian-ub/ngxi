import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCanaraEpassbookIcon],svg[arcticons-canara-epassbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m22.887 25.682l-2.171-.267l6.304-10.857l6.48 12.433l-6.799-.839"></svg:path><svg:path d="m20.342 22.512l-5.842.976l7.486 5.954l6.392-8.274l-3.494.584"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.5 4.5h-7a3.5 3.5 0 1 1-7 0h-7c-1.1 0-2 .9-2 2v35c0 1.1.9 2 2 2h7a3.5 3.5 0 1 1 7 0h7c1.1 0 2-.9 2-2v-35c0-1.1-.9-2-2-2"></svg:path>`,
})
export class ArcticonsCanaraEpassbookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

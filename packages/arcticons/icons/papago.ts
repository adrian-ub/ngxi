import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPapagoIcon],svg[arcticons-papago-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.76 17.135c0-6.711-5.44-12.151-12.151-12.151v12.151z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.609 7.784a9.209 9.209 0 1 0 6.511 15.72l-6.511-6.369m0 0v9.066"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.409 38.81v4.69c8.247 0 18.711-5.082 18.711-12.429v-7.567"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.609 4.984c-.46 0-.91.03-1.356.08l.007-.006s-7.6 1.068-11.839-.558c.182 2.294 2.224 4.04 3.723 5.023a12.1 12.1 0 0 0-2.687 7.612c0 8.709-.956 17.413-5.217 21.675c7.143 0 10.105.392 14.984-6.287"></svg:path><svg:circle cx="22.875" cy="15.58" r="1.555" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPapagoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

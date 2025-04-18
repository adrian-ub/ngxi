import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeUnderlineIcon],svg[mynaui-type-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 3v7.539c0 1.713.632 3.357 1.757 4.569S10.41 17 12 17s3.117-.68 4.243-1.892C17.368 13.896 18 12.252 18 10.538V3M4 21h16"></svg:path>`,
})
export class MynauiTypeUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

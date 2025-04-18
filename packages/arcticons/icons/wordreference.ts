import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWordreferenceIcon],svg[arcticons-wordreference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.813 31.5v-15h4.911c2.776 0 5.027 2.255 5.027 5.038s-2.25 5.037-5.027 5.037h-4.91m4.91 0l4.91 4.921m-13.01-9.933L20.53 31.5l-3.093-9.937l-3.094 9.937l-3.094-9.937M26.813 16.5h-2.146"></svg:path>`,
})
export class ArcticonsWordreferenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMegaphone2Icon],svg[streamline-megaphone-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.5 9.06l7.68 2.56a1 1 0 0 0 .9-.14a1 1 0 0 0 .42-.81V2.44a1 1 0 0 0-.854-.983a1 1 0 0 0-.466.043L4.5 4.06zm-4-2.5A2.5 2.5 0 0 0 3 9.06h1.5v-5H3a2.5 2.5 0 0 0-2.5 2.5"></svg:path><svg:path d="M3 9.06v1a2.5 2.5 0 0 0 2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineMegaphone2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

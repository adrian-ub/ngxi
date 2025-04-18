import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward60Icon],svg[mdi-fast-forward-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3c-4.7 0-8.6 3-10 7.2l2.4.8c1-3.2 4.1-5.5 7.6-5.5c2 0 3.7.7 5.1 1.9L14 10h7V3l-2.6 2.6C16.5 4 14.1 3 11.5 3M19 14v6c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2m-4 0v6h2v-6zm-8-2c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H7v-2h4v-2zm0 6h2v2H7z"></svg:path>`,
})
export class MdiFastForward60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

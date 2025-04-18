import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPostJp11Icon],svg[maki-post-jp-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1 2.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 1 2.25zm8.25 1.749h-7.5a.75.75 0 0 0 0 1.5H4.5v3a1 1 0 0 0 2 0v-3h2.75a.75.75 0 1 0 0-1.5z" fill="currentColor"></svg:path>`,
})
export class MakiPostJp11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGifIcon],svg[mdi-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 8h2v8h-2V8M7.67 8H4.33C3.53 8 3 8.67 3 9.33v5.34c0 .66.53 1.33 1.33 1.33h3.34c.8 0 1.33-.67 1.33-1.33V12H7v2H5v-4h4v-.67C9 8.67 8.47 8 7.67 8M21 10V8h-6v8h2v-2h2.5v-2H17v-2h4z" fill="currentColor"></svg:path>`,
})
export class MdiGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

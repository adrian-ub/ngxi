import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTumblrReblogIcon],svg[mdi-tumblr-reblog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.75 17L8 12.75V16h10v-4.5l2-2V16a2 2 0 0 1-2 2H8v3.25L3.75 17m16.5-10L16 11.25V8H6v4.5l-2 2V8a2 2 0 0 1 2-2h10V2.75L20.25 7z" fill="currentColor"></svg:path>`,
})
export class MdiTumblrReblogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

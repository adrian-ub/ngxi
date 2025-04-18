import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCouchIcon],svg[la-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c-1.645 0-3 1.355-3 3v2.188c-1.156.417-2 1.519-2 2.812v11h2v-2h26v2h2V15c0-1.293-.844-2.395-2-2.813V10c0-1.645-1.355-3-3-3zm0 2h20c.555 0 1 .445 1 1v2.188c-1.156.417-2 1.519-2 2.812v2H7v-2c0-1.293-.844-2.395-2-2.813V10c0-.555.445-1 1-1m-2 5c.555 0 1 .445 1 1v4h22v-4c0-.555.445-1 1-1s1 .445 1 1v7H3v-7c0-.555.445-1 1-1"></svg:path>`,
})
export class LaCouchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

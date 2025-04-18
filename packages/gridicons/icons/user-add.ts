import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsUserAddIcon],svg[gridicons-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 20s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2M6 10V7H4v3H1v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class GridiconsUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

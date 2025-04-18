import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInstapaperIcon],svg[mdi-instapaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 5a1 1 0 0 0-1-1H8V2h8v2h-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1v2H8v-2h1a1 1 0 0 0 1-1V5z" fill="currentColor"></svg:path>`,
})
export class MdiInstapaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

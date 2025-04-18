import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsHeadphonesIcon],svg[zondicons-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A6 6 0 1 0 4 8v11H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2V8a8 8 0 1 1 16 0v3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2zm-4 2h3v10h-3zm-7 0h3v10H5z"></svg:path>`,
})
export class ZondiconsHeadphonesIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

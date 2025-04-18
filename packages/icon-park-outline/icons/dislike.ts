import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDislikeIcon],svg[icon-park-outline-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 31l-3-5l7-6l-9-5l1-5.8C18.5 8.432 16.8 8 15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23c7-2 20-12 20-23c0-6.075-4.925-11-11-11c-1.8 0-3.5.433-5 1.2"></svg:path>`,
})
export class IconParkOutlineDislikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

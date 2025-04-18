import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGreatWallIcon],svg[icon-park-outline-great-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 9v31h40V9h-8v7h-8V9h-8v7h-8V9zm0 15h40M4 32h40m-20-8v8m-8 0v8m0-24v8m16 8v8m0-24v8"></svg:path>`,
})
export class IconParkOutlineGreatWallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaMenuIcon],svg[iwwa-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.666 13.25H7.334a.5.5 0 0 1 0-1h25.332a.5.5 0 0 1 0 1m0 7.25H7.334a.5.5 0 0 1 0-1h25.332a.5.5 0 0 1 0 1m0 7.25H7.334a.5.5 0 0 1 0-1h25.332a.5.5 0 0 1 0 1"></svg:path>`,
})
export class IwwaMenuIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}

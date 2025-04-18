import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsListBullet16SolidIcon],svg[heroicons-list-bullet-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2M6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM4 12.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0M3 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class HeroiconsListBullet16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

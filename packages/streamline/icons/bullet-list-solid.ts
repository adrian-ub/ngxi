import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBulletListSolidIcon],svg[streamline-bullet-list-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M1 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.75 1.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM4 7a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 4 7m.75 3.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBulletListSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

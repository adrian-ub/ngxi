import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasListBulletedIcon],svg[pajamas-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5.75 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm-.75 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M3 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 5.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasListBulletedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

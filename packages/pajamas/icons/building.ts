import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasBuildingIcon],svg[pajamas-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 14.5v-13h9v13H11V11a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3.5zm3 0h3v-3h-3zM2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm3 2.75A.75.75 0 0 1 5.75 3h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 5 3.75M9.25 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM5 7.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 5 7.25m4.25-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasBuildingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserSolidIcon],svg[rivet-icons-user-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a4 4 0 1 0 0 8a4 4 0 0 0 0-8M6 9a3 3 0 0 0-3 3v4h10v-4a3 3 0 0 0-3-3z"></svg:path>`,
})
export class RivetIconsUserSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

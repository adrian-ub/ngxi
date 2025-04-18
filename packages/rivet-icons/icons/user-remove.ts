import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserRemoveIcon],svg[rivet-icons-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4M0 12a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0zm3-1a1 1 0 0 0-1 1v2h6v-2a1 1 0 0 0-1-1zm7-3h6V6h-6z"></svg:path>`,
})
export class RivetIconsUserRemoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

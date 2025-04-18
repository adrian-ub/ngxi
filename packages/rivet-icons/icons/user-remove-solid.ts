import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserRemoveSolidIcon],svg[rivet-icons-user-remove-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-1 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0zm10-4h6V6h-6z"></svg:path>`,
})
export class RivetIconsUserRemoveSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

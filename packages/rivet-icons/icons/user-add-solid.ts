import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsUserAddSolidIcon],svg[rivet-icons-user-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-1 8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4H0zm16-4h-2v2h-2V8h-2V6h2V4h2v2h2z"></svg:path>`,
})
export class RivetIconsUserAddSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsImageSolidIcon],svg[rivet-icons-image-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1h14v14H1zm11 5a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-9 7h10v-.465l-2.072-1.381l-2.086 1.043l-4.376-3.89L3 9.482z"></svg:path>`,
})
export class RivetIconsImageSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

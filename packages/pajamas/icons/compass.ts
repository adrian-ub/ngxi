import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasCompassIcon],svg[pajamas-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7.186 5.605L12 4l-1.605 4.814a2.5 2.5 0 0 1-1.58 1.581L4 12l1.605-4.814a2.5 2.5 0 0 1 1.58-1.581ZM9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasCompassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

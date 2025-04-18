import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsShareIcon],svg[rivet-icons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 .917 2.16l-4.94 2.47a3 3 0 0 1 0 .74l4.94 2.47a3 3 0 1 1-.895 1.789l-4.94-2.47a3 3 0 1 1 0-4.319l4.94-2.47A3 3 0 0 1 10 3M3 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m10 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RivetIconsShareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

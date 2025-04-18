import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMoreVertIcon],svg[iconoir-more-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class IconoirMoreVertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirVialsIcon],svg[iconoir-vials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H3m6-9H5m14 0h-4m-8 6a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2m10 0a2 2 0 0 1-2-2V3h4v13a2 2 0 0 1-2 2"></svg:path>`,
})
export class IconoirVialsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

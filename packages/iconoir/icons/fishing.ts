import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFishingIcon],svg[iconoir-fishing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v10c0 6-10 6-10 0v-4l2 2"></svg:path>`,
})
export class IconoirFishingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenModeration26Icon],svg[garden-moderation-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17.35a1.35 1.35 0 1 1-.001-2.7a1.35 1.35 0 0 1 .001 2.7M12 8a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0zm9-3H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2.545c0 .374.47.588.8.364l4.266-2.91H21a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"></svg:path>`,
})
export class GardenModeration26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

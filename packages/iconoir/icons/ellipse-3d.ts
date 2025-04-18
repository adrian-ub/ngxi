import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEllipse3dIcon],svg[iconoir-ellipse-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M12 22c4.418 0 8-4.477 8-10S16.418 2 12 2S4 6.477 4 12s3.582 10 8 10"></svg:path><svg:path fill="currentColor" d="M12 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirEllipse3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWarningTriangleIcon],svg[iconoir-warning-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.043 21H3.957c-1.538 0-2.5-1.664-1.734-2.997l8.043-13.988c.77-1.337 2.699-1.337 3.468 0l8.043 13.988C22.543 19.336 21.58 21 20.043 21ZM12 9v4"></svg:path><svg:path stroke-linejoin="round" d="m12 17.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirWarningTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

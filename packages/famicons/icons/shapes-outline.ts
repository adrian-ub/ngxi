import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsShapesOutlineIcon],svg[famicons-shapes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M336 320H32L184 48z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M265.32 194.51A144 144 0 1 1 192 320"></svg:path>`,
})
export class FamiconsShapesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

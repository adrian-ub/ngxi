import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleSmallOutlineIcon],svg[healthicons-triangle-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24 13c.379 0 .725.181.894.468l12 20.307a.735.735 0 0 1-.043.824c-.183.25-.504.401-.851.401H12c-.347 0-.668-.152-.85-.401a.735.735 0 0 1-.044-.824l12-20.307c.169-.287.515-.468.894-.468m0 2.738l-10.382 17.57h20.764z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsTriangleSmallOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

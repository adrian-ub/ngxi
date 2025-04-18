import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsMinusSolidIcon],svg[zondicons-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m5-11H5v2h10z"></svg:path>`,
})
export class ZondiconsMinusSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

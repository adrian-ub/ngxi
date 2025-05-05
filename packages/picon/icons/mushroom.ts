import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMushroomIcon],svg[picon-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-4 3-4-4 1-4s5 7 1 4l1 4H2"></svg:path>`,
})
export class PiconMushroomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

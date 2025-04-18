import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsHorizontallyIcon],svg[ix-align-objects-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 277.333v-42.666H42.667v42.666zm170.667 0v-42.666h-85.334v42.666zm128 149.334V277.333h42.666v-42.666h-42.666V85.333H277.333v341.334zM384 384h-64V128h64zm-149.333-21.333V149.333H85.333v213.334zM192 320h-64V192h64z"></svg:path>`,
})
export class IxAlignObjectsHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

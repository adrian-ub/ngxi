import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiThumbDownIcon],svg[zmdi-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 0q17 0 29.5 12.5T341 43v213q0 18-12 30L188 427l-22-23q-10-9-10-22l1-7l20-98H43q-18 0-30.5-12.5T0 235v-43q0-8 3-16L67 26Q78 0 107 0zm85 0h85v256h-85z"></svg:path>`,
})
export class ZmdiThumbDownIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

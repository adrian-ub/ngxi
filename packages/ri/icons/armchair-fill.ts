import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArmchairFillIcon],svg[ri-armchair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8a4 4 0 0 0-4 4v1a5 5 0 0 1 5 5h6a5 5 0 0 1 5-5V7a4 4 0 0 0-4-4m4 7a3 3 0 0 0-3 3v3h-2v-1H9v1H7v-3a3 3 0 1 0-4 2.83V21h2v-1h14v1h2v-5.17A3.001 3.001 0 0 0 20 10"></svg:path>`,
})
export class RiArmchairFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

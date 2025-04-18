import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarCabooseIcon],svg[mdi-train-car-caboose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V7h-8V6h1V4H8v2h1v1H1v2h1v6H1v2h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1v-2h-1V9zM4 15H3V9h1zm7-3H6V9h5zm7 0h-5V9h5zm3 3h-1V9h1z"></svg:path>`,
})
export class MdiTrainCarCabooseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

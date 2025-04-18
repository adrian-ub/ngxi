import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarPassengerVariantIcon],svg[mdi-train-car-passenger-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v8h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V9a2 2 0 0 0-2-2m-10 5H3V9h8zm10 0h-8V9h8z"></svg:path>`,
})
export class MdiTrainCarPassengerVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

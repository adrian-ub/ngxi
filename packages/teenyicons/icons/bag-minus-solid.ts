import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBagMinusSolidIcon],svg[teenyicons-bag-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1A2.5 2.5 0 0 0 5 3.5V4H4v-.5a3.5 3.5 0 1 1 7 0V4h-1v-.5A2.5 2.5 0 0 0 7.5 1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.395 5a1.5 1.5 0 0 0-1.49 1.334l-.778 7A1.5 1.5 0 0 0 2.617 15h9.766a1.5 1.5 0 0 0 1.49-1.666l-.777-7A1.5 1.5 0 0 0 11.606 5zM5 9v1h5V9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBagMinusSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

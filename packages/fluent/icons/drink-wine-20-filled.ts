import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDrinkWine20FilledIcon],svg[fluent-drink-wine-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2a.5.5 0 0 0-.5.5V8a5 5 0 0 0 4.5 4.975V17h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-4.025A5 5 0 0 0 15 8V2.5a.5.5 0 0 0-.5-.5zM6 5.5V3h8v2.5zm7.452 2.575a3.5 3.5 0 0 1-2.867 2.876a.5.5 0 1 1-.167-.986a2.5 2.5 0 0 0 2.048-2.054a.5.5 0 0 1 .986.164"></svg:path>`,
})
export class FluentDrinkWine20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

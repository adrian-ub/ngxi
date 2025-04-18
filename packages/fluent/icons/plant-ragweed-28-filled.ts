import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlantRagweed28FilledIcon],svg[fluent-plant-ragweed-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a4 4 0 0 0-3.947 4.653a3.001 3.001 0 0 0-1.037 5.097A3 3 0 0 0 11 17h2.25v5.69l-4.47-4.47a.75.75 0 0 0-1.06 1.06l5.53 5.53v1.44a.75.75 0 0 0 1.5 0v-1.44l5.53-5.53a.75.75 0 1 0-1.06-1.06l-4.47 4.47V17H17a3 3 0 0 0 1.984-5.25a3.001 3.001 0 0 0-1.038-5.097Q18 6.333 18 6a4 4 0 0 0-4-4"></svg:path>`,
})
export class FluentPlantRagweed28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}

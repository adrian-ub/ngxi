import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaDropletFillIcon],svg[eva-droplet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28a7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3a1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1"></svg:path>`,
})
export class EvaDropletFillIcon {
  readonly viewBox = input("0.1 0.1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

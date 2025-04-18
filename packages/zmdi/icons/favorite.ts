import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFavoriteIcon],svg[zmdi-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 391l-31-28q-42-38-62-56.5T72 258t-40.5-49t-22-43.5T0 117q0-49 34-83t83-34q58 0 96 45q38-45 96-45q50 0 84 34t34 83q0 24-10 48.5T395 209t-40.5 49t-48 48.5T244 364z"></svg:path>`,
})
export class ZmdiFavoriteIcon {
  readonly viewBox = input("0 0 432 392")
  readonly width = input("1.11em")
  readonly height = input("1em")
}

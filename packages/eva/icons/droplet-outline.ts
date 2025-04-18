import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaDropletOutlineIcon],svg[eva-droplet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.1a7.4 7.4 0 0 1-5.28-2.28a7.73 7.73 0 0 1 .1-10.77l4.64-4.65a.94.94 0 0 1 .71-.3a1 1 0 0 1 .71.31l4.56 4.72a7.73 7.73 0 0 1-.09 10.77A7.33 7.33 0 0 1 12 21.1m.13-15.57L8.24 9.45a5.74 5.74 0 0 0-.07 8A5.43 5.43 0 0 0 12 19.1a5.42 5.42 0 0 0 3.9-1.61a5.72 5.72 0 0 0 .06-8Z"></svg:path>`,
})
export class EvaDropletOutlineIcon {
  readonly viewBox = input("0.1 0.1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

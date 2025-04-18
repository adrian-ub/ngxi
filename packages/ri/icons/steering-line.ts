import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSteeringLineIcon],svg[ri-steering-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 14.001a10.01 10.01 0 0 1-8.401 7.902v-2.025A8.01 8.01 0 0 0 19.747 14zm-17.548 0a8.01 8.01 0 0 0 6.247 5.859v2.028a10.01 10.01 0 0 1-8.3-7.887zM17.999 11v2h-3a2 2 0 0 0-1.994 1.85l-.006.15v3h-2v-3a2 2 0 0 0-1.85-1.995L8.999 13H6v-2zm-6-9c5.186 0 9.45 3.947 9.951 9h-2.012A8.001 8.001 0 0 0 4.06 11H2.05C2.552 5.947 6.815 2 12 2"></svg:path>`,
})
export class RiSteeringLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProximaIcon],svg[arcticons-proxima-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.079 6.64c.518.079 23.763-.04 23.763-.04L42.5 17.973l-6.658 11.893H12.278L5.5 41.4h11.563l13.516-23.108l-11.403-.04l-7.097-11.614Z"></svg:path>`,
})
export class ArcticonsProximaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

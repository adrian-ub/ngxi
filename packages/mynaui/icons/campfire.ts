import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCampfireIcon],svg[mynaui-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.422 20.706l13.156-4.789m0 4.789L5.422 15.917m10.963-4.349A4.75 4.75 0 0 1 12 14.5c-2.623 0-4.75-2.134-4.75-4.767c0-2.632.998-3.709 2.558-6.233c2.923 1.283 2.923 5.133 2.923 5.133s.96-1.856 2.923-2.75c.63 1.86 1.478 3.89.731 5.685"></svg:path>`,
})
export class MynauiCampfireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

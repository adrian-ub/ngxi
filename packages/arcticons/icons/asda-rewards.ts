import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAsdaRewardsIcon],svg[arcticons-asda-rewards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.722 30.581H15.279M10.959 43.5L24 4.5l13.041 39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.298l1.99 3.688l3.74.648l-2.422 2.964l1.053 4.554l-4.102-2.07l-3.688 2.07l.34-4.554l-2.737-2.676l3.752-.937z"></svg:path>`,
})
export class ArcticonsAsdaRewardsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

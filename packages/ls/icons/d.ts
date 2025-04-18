import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDIcon],svg[ls-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M490 324V0h72v754h-72v-82c-53 58-132 96-216 96C122 768 0 648 0 498s122-270 274-270c84 0 163 38 216 96M275 702c115 0 215-91 215-204S390 294 275 294c-114 0-207 91-207 204s93 204 207 204"></svg:path>`,
})
export class LsDIcon {
  readonly viewBox = input("0 0 562 768")
  readonly width = input("0.74em")
  readonly height = input("1em")
}

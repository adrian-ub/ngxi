import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilTagIcon],svg[il-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M725 348q7 7 7 16t-7 16L398 708q-29 27-66 27H23q-10 0-16-7t-7-16V402q0-38 27-65L354 10q7-7 17-7t16 7zM185 619q29 0 50-21t20-49t-20-49t-50-20t-49 20t-20 49t20 49t49 21"></svg:path>`,
})
export class IlTagIcon {
  readonly viewBox = input("0 0 740 840")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

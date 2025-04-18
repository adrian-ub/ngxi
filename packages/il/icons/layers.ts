import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilLayersIcon],svg[il-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M712 353q6 4 6 10t-6 10L371 571q-12 7-23 0L6 373q-6-3-6-10t6-10l72-41l270 155q11 7 23 0l269-155zm0 163q6 3 6 9t-6 11L371 733q-12 7-23 0L6 536q-6-4-6-11t6-9l72-42l270 155q11 7 23 0l269-155zM6 222q-6-3-6-10t6-10L348 5q11-7 23 0l341 197q6 4 6 10t-6 10L371 420q-12 7-23 0z"></svg:path>`,
})
export class IlLayersIcon {
  readonly viewBox = input("0 0 720 840")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArcticonsHappyIcon],svg[arcticons-arcticons-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m24 10.84l-11.4 6.58v13.16L24 37.16l11.4-6.58V17.42z"></svg:path><svg:circle cx="8.07" cy="14.8" r="3.11"></svg:circle><svg:circle cx="24" cy="5.61" r="3.11"></svg:circle><svg:circle cx="39.93" cy="14.8" r="3.11"></svg:circle><svg:circle cx="39.93" cy="33.2" r="3.11"></svg:circle><svg:circle cx="24" cy="42.39" r="3.11"></svg:circle><svg:circle cx="8.07" cy="33.2" r="3.11"></svg:circle><svg:path d="m12.6 30.58l-1.84 1.06M24 37.16v2.12m0-28.44V8.71m11.4 21.87l1.84 1.06M35.4 17.42l1.84-1.06M12.6 17.42l-1.84-1.06"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28.993 27.3c-1.488 1.156-3.054 1.67-4.993 1.67c-1.938 0-3.505-.514-4.993-1.67"></svg:path><svg:circle cx="19.484" cy="21.621" r="2.592"></svg:circle><svg:circle cx="28.516" cy="21.621" r="2.592"></svg:circle></svg:g>`,
})
export class ArcticonsArcticonsHappyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

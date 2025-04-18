import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRobotLightIcon],svg[ph-robot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 50h-66V16a6 6 0 0 0-12 0v34H56a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h144a30 30 0 0 0 30-30V80a30 30 0 0 0-30-30m18 142a18 18 0 0 1-18 18H56a18 18 0 0 1-18-18V80a18 18 0 0 1 18-18h144a18 18 0 0 1 18 18ZM74 108a10 10 0 1 1 10 10a10 10 0 0 1-10-10m88 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m2 30H92a26 26 0 0 0 0 52h72a26 26 0 0 0 0-52m-22 12v28h-28v-28Zm-64 14a14 14 0 0 1 14-14h10v28H92a14 14 0 0 1-14-14m86 14h-10v-28h10a14 14 0 0 1 0 28"></svg:path>`,
})
export class PhRobotLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

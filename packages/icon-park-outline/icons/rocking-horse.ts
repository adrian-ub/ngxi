import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRockingHorseIcon],svg[icon-park-outline-rocking-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 29s-3-5-3-11h16s0-4.5 3-8s6-5 6-5l8 8.5v5L36 16c-4 5-2 13-2 13zm16 0l5 12M18 29l-5 12m-9-4s6 6 20 6s20-6 20-6M11 18c0-3-2-6-7-6"></svg:path>`,
})
export class IconParkOutlineRockingHorseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

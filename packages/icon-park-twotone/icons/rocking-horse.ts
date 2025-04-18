import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRockingHorseIcon],svg[icon-park-twotone-rocking-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRockingHorse0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M14 29s-3-5-3-11h16s0-4.5 3-8s6-5 6-5l8 8.5v5L36 16c-4 5-2 13-2 13z"></svg:path><svg:path d="m30 29l5 12M18 29l-5 12m-9-4s6 6 20 6s20-6 20-6M11 18c0-3-2-6-7-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRockingHorse0)"></svg:path>`,
})
export class IconParkTwotoneRockingHorseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

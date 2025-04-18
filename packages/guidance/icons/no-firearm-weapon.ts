import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoFirearmWeaponIcon],svg[guidance-no-firearm-weapon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5.5l13.356 13.356M23.5 23.5l-9.644-9.644M14 14H8.75M4 4h19s.5 1 .5 2.5S23 9 23 9h-8v.5c0 2.463-.843 3.915-1.144 4.356m-11.46-7.96C1.638 7.465.5 8.572.5 8.572v.374c1 .553 2 1.553 2 1.553v.25S1 16.161 1 20h7c0-4.988 1.75-9.5 1.75-9.5h5.202"></svg:path>`,
})
export class GuidanceNoFirearmWeaponIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

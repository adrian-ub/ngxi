import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainLinuxmintIcon],svg[devicon-plain-linuxmint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 64-64A64 64 0 0 0 64 0M29 31.5h10v45.15c.05 5.45 4.5 9.9 10 9.85h30.15c5.45-.05 9.9-4.5 9.85-10v-25c0-2.75-2.25-5-5-5s-5 2.25-5 5v25H69v-25c0-2.75-2.25-5-5-5s-5 2.25-5 5v25H49v-25c.05-8.25 6.75-14.95 15-15c3.7.05 7.25 1.45 10 3.95c2.75-2.55 6.3-3.95 10-3.95c8.25.05 14.95 6.75 15 15v25a20.06 20.06 0 0 1-20 20H49a20.06 20.06 0 0 1-20-20z"></svg:path>`,
})
export class DeviconPlainLinuxmintIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

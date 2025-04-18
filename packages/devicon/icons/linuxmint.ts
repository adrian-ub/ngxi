import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLinuxmintIcon],svg[devicon-linuxmint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M128 64a64 64 0 0 1-64 64A64 64 0 0 1 0 64A64 64 0 0 1 64 0a64 64 0 0 1 64 64"></svg:path><svg:path fill="#69b53f" d="M118 64a54 54 0 0 1-54 54a54 54 0 0 1-54-54a54 54 0 0 1 54-54a54 54 0 0 1 54 54"></svg:path><svg:path fill="#f8f8f8" d="M29 31.5v45a20.06 20.06 0 0 0 20 20h30a20.06 20.06 0 0 0 20-20v-25c-.05-8.25-6.75-14.95-15-15c-3.7 0-7.25 1.4-10 3.95c-2.75-2.5-6.3-3.9-10-3.95c-8.25.05-14.95 6.75-15 15v25h10v-25c0-2.75 2.25-5 5-5s5 2.25 5 5v25h10v-25c0-2.75 2.25-5 5-5s5 2.25 5 5v25c.05 5.5-4.4 9.95-9.85 10H49c-5.5.05-9.95-4.4-10-9.85V31.5z"></svg:path>`,
})
export class DeviconLinuxmintIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

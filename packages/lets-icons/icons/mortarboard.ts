import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardIcon],svg[lets-icons-mortarboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 10l8-4l8 4l-8 4zm16 0v4"></svg:path><svg:path d="M7 12v5s.455 2 5 2c4.546 0 5-2 5-2v-5"></svg:path></svg:g>`,
})
export class LetsIconsMortarboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

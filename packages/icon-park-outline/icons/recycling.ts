import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRecyclingIcon],svg[icon-park-outline-recycling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33.526 19.5L25.793 6.105c-.783-1.356-2.75-1.327-3.493.052L17 16m8 24h16.42c1.566 0 2.524-1.716 1.704-3.048L37 27m-24-4L4.773 36.986C3.989 38.319 4.95 40 6.497 40H17"></svg:path><svg:path d="m29 36l-4 4l4 4m-1-25.8l5.464 1.465l1.464-5.465M7.5 24.464L12.964 23l1.464 5.464"></svg:path></svg:g>`,
})
export class IconParkOutlineRecyclingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

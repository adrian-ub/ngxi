import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLaptopDevModeIcon],svg[iconoir-laptop-dev-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 19h2m1-13l2 2l-2 2m-4-4L8 8l2 2"></svg:path></svg:g>`,
})
export class IconoirLaptopDevModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagVc4x3Icon],svg[flag-vc-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#f4f100" d="M0 0h640v480H0z"></svg:path><svg:path fill="#199a00" d="M490 0h150v480H490z"></svg:path><svg:path fill="#0058aa" d="M0 0h150v480H0z"></svg:path><svg:path fill="#199a00" d="m259.3 130l-46.4 71.3l44.7 74.4l43.8-73.7zm121.2 0l-46.3 71.3l44.7 74.4l43.8-73.7zm-61.2 97.3l-46.4 71.4l44.8 74.4l43.8-73.7l-42.2-72z"></svg:path></svg:g>`,
})
export class FlagVc4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

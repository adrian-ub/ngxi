import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSy1x1Icon],svg[flag-sy-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 0h512v512H0Z"></svg:path><svg:path fill="#fff" d="M0 0h512v341.3H0Z"></svg:path><svg:path fill="#007a3d" d="M0 0h512v170.7H0Z"></svg:path><svg:path fill="#ce1126" d="M26.3 317.9L67.2 192L108 317.9L1 240h132.4m270.5 77.8L445 192l40.8 125.9l-107-77.8H511m-295.9 77.8L256 192l40.9 125.9l-107-77.8h132.3"></svg:path>`,
})
export class FlagSy1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

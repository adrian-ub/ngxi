import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMegaphoneFill12Icon],svg[garden-megaphone-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9v1.5a1.5 1.5 0 0 1-3 0V9a3 3 0 1 1 0-6h4.586L10.293.293C10.923-.337 12 .109 12 1v10c0 .89-1.077 1.337-1.707.707L7.586 9z"></svg:path>`,
})
export class GardenMegaphoneFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

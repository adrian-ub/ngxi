import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHomeFillIcon],svg[mage-home-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.444 9.473l-1.67 10a3 3 0 0 1-1 1.79a3.2 3.2 0 0 1-2 .7h-9.61a3 3 0 0 1-2.93-2.49l-1.67-10a3 3 0 0 1 .23-1.7a3 3 0 0 1 1.12-1.29l6.48-4a3 3 0 0 1 3.15 0l6.47 4c.507.3.911.747 1.16 1.28a3 3 0 0 1 .27 1.71"></svg:path>`,
})
export class MageHomeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

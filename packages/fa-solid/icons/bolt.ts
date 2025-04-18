import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidBoltIcon],svg[fa-solid-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5c8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36"></svg:path>`,
})
export class FaSolidBoltIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

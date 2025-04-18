import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaLifebuoyOutlineIcon],svg[cuida-lifebuoy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-5 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m17.293 18.707l-3-3l1.414-1.414l3 3zm-9-9l-3-3l1.414-1.414l3 3zm10.914-3.5l-4 4l-1.414-1.414l4-4zm-9 9l-4 4l-1.414-1.414l4-4z" clip-rule="evenodd"></svg:path>`,
})
export class CuidaLifebuoyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

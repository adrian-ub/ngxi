import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiGarden11Icon],svg[maki-garden-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 6a4 4 0 0 1-4.25 4A4 4 0 0 1 1.5 6a4 4 0 0 1 3.9 2.26V5h-2a.89.89 0 0 1-.9-.88V1.84a.35.35 0 0 1 .64-.21L4.28 3L5.45.67a.35.35 0 0 1 .6 0L7.22 3l1.13-1.38a.35.35 0 0 1 .65.21v2.28a.89.89 0 0 1-.89.89H6.1v3.26A4 4 0 0 1 10 6z" fill="currentColor"></svg:path>`,
})
export class MakiGarden11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFurniture11Icon],svg[maki-furniture-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 7.555V6a.5.5 0 1 0-1 0v1.555a2.5 2.5 0 0 0-1.923 1.827a.502.502 0 0 0 .489.618h3.868a.502.502 0 0 0 .49-.618A2.5 2.5 0 0 0 6 7.555z" fill="currentColor"></svg:path><svg:path d="M9.135 4.27L7.64 1.279A.505.505 0 0 0 7.188 1H3.812a.505.505 0 0 0-.451.279l-1.496 2.99A.505.505 0 0 0 2.317 5H7v.75a.25.25 0 1 0 .5 0V5h1.183c.376 0 .62-.395.452-.73z" fill="currentColor"></svg:path>`,
})
export class MakiFurniture11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}

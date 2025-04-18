import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDatabaseStroke16Icon],svg[garden-database-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:ellipse cx="8" cy="3" rx="5.5" ry="2"></svg:ellipse><svg:path d="M2.5 3v10.5c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2V3m0 7c0 1.1-2.5 2-5.5 2s-5.5-.9-5.5-2m11-3.5c0 1.1-2.5 2-5.5 2s-5.5-.9-5.5-2"></svg:path></svg:g>`,
})
export class GardenDatabaseStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

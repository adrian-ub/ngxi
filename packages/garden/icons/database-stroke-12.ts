import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenDatabaseStroke12Icon],svg[garden-database-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:ellipse cx="6" cy="2" rx="4.5" ry="1.5"></svg:ellipse><svg:path d="M1.5 2v8c0 .8 2 1.5 4.5 1.5s4.5-.7 4.5-1.5V2m0 5.3c0 .8-2 1.5-4.5 1.5s-4.5-.6-4.5-1.5m9-2.6c0 .8-2 1.5-4.5 1.5s-4.5-.7-4.5-1.5"></svg:path></svg:g>`,
})
export class GardenDatabaseStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

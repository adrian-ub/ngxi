import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPerson26Icon],svg[garden-person-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="13" cy="9" r="4"></svg:circle><svg:path d="M7.019 21c-.613 0-1.105-.538-1.007-1.136C6.561 16.538 9.481 14 13 14s6.439 2.538 6.987 5.864c.099.598-.394 1.136-1.006 1.136z"></svg:path></svg:g>`,
})
export class GardenPerson26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

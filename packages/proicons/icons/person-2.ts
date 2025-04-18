import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPerson2Icon],svg[proicons-person-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="8.196" r="4.446"></svg:circle><svg:path d="M19.608 20.25a7.608 7.608 0 0 0-15.216 0"></svg:path></svg:g>`,
})
export class ProiconsPerson2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

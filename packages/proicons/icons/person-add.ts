import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPersonAddIcon],svg[proicons-person-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.104 6.854a3.604 3.604 0 1 1-7.208 0a3.604 3.604 0 0 1 7.208 0M10.87 20.75H3.5a1 1 0 0 1-1-1v-1.246c0-2.806 3.974-5.004 8-5.004q.387 0 .77.027"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m0-8.993a.5.5 0 0 1 .5.5V17h2.493a.5.5 0 1 1 0 1H18v2.494a.5.5 0 0 1-1 0V18h-2.493a.5.5 0 1 1 0-1H17v-2.493a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class ProiconsPersonAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

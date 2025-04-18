import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchDollarSolidIcon],svg[streamline-search-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 1.5a5 5 0 1 0 0 10a5 5 0 0 0 0-10M0 6.5a6.5 6.5 0 1 1 11.749 3.835l1.958 1.958a1 1 0 1 1-1.414 1.414l-1.958-1.958A6.5 6.5 0 0 1 0 6.5m5.837-1.88c0-.175.141-.317.316-.317h.693c.175 0 .317.142.317.316v.498H5.837v-.498Zm2.38 0v.497h.46a.95.95 0 0 1 .95.948v2.24a.95.95 0 0 1-.95.949H4.323a.95.95 0 0 1-.95-.948V6.065a.95.95 0 0 1 .95-.948h.459v-.498A1.37 1.37 0 0 1 6.153 3.25h.693a1.37 1.37 0 0 1 1.372 1.37Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSearchDollarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

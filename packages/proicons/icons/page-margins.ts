import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPageMarginsIcon],svg[proicons-page-margins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="15.5" height="18.5" x="4.25" y="2.75" rx="2.5"></svg:rect><svg:path d="M8.25 2.75v18.5m-4-14.5h15.5m-15.5 10.5h15.5m-4-14.5v18.5"></svg:path></svg:g>`,
})
export class ProiconsPageMarginsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

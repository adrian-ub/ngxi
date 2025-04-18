import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCenterVerticalIcon],svg[proicons-center-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.75 20.25h16.5M3.75 3.75h16.5"></svg:path><svg:rect width="6" height="13" rx="2" transform="matrix(0 -1 -1 0 18.5 15)"></svg:rect></svg:g>`,
})
export class ProiconsCenterVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

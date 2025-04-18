import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBulletListSquareIcon],svg[proicons-bullet-list-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="7.877" cy="8.25" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.062 8.25h5.31"></svg:path><svg:circle cx="7.877" cy="12" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.062 12h5.31"></svg:path><svg:circle cx="7.877" cy="15.75" r="1" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.062 15.75h5.31"></svg:path><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" stroke="currentColor" stroke-width="1.5" rx="4"></svg:rect></svg:g>`,
})
export class ProiconsBulletListSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

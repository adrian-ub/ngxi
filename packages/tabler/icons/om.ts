import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOmIcon],svg[tabler-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 12c2.21 0 4-1.567 4-3.5S9.21 5 7 5c-1.594 0-2.97.816-3.613 2m.036 7.483A4.9 4.9 0 0 0 3 16.5C3 18.985 4.79 21 7 21s4-2.015 4-4.5S9.21 12 7 12"></svg:path><svg:path d="M14.071 17.01C14.398 19.287 15.81 21 17.5 21c1.933 0 3.5-2.239 3.5-5s-1.567-5-3.5-5c-.96 0-1.868.606-2.5 1.5c-.717 1.049-1.76 1.7-2.936 1.7c-.92 0-1.766-.406-2.434-1.087M17 3l2 2m-7-2q2.5 5.5 9 5"></svg:path></svg:g>`,
})
export class TablerOmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

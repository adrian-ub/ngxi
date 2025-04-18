import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChristmasBallIcon],svg[tabler-christmas-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 13a8 8 0 1 0 16 0a8 8 0 1 0-16 0"></svg:path><svg:path d="m11 5l1-2l1 2m-8.488 5.161Q8.256 8.504 12 11q3.941 2.628 7.882.653M4.315 15.252Q8.157 13.438 12 16q3.439 2.292 6.878 1.081"></svg:path></svg:g>`,
})
export class TablerChristmasBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

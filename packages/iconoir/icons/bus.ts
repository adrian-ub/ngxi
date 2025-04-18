import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirBusIcon],svg[iconoir-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 16.01l.01-.011m9.99.011l.01-.011M3 12h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm18-4V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m4 0h10"></svg:path><svg:path d="M4.5 20v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20m7 0v1.9a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V20"></svg:path></svg:g>`,
})
export class IconoirBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

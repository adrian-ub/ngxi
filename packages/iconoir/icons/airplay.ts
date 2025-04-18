import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAirplayIcon],svg[iconoir-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 17H3V4h18v13h-3"></svg:path><svg:path d="M8.622 19.067L11.5 14.75a.6.6 0 0 1 .998 0l2.88 4.318a.6.6 0 0 1-.5.933H9.12a.6.6 0 0 1-.5-.933Z"></svg:path></svg:g>`,
})
export class IconoirAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

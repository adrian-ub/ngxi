import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTennisBallAltIcon],svg[iconoir-tennis-ball-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.66 7c2.762 4.783 1.123 10.899-3.66 13.66S6.101 21.783 3.34 17S2.217 6.1 7 3.34S17.899 2.217 20.66 7"></svg:path><svg:path d="M21.46 15.242c-4.986-3.302-7.582-7.8-7.538-13.056m-3.844 19.628C9.71 15.844 7.114 11.347 2.54 8.758"></svg:path></svg:g>`,
})
export class IconoirTennisBallAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

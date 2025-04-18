import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVrGlassesIcon],svg[icon-park-vr-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path fill="#2F88FF" stroke="#000" d="M2 12H46V36H30L24 30L18 36H2V12Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M13 28C15.2091 28 17 26.2091 17 24C17 21.7909 15.2091 20 13 20C10.7909 20 9 21.7909 9 24C9 26.2091 10.7909 28 13 28Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24C31 26.2091 32.7909 28 35 28Z"></svg:path></svg:g>`,
})
export class IconParkVrGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

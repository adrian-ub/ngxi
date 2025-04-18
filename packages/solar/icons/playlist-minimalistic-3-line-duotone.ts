import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3LineDuotoneIcon],svg[solar-playlist-minimalistic-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 4H3m5 10H3m9-5H3" opacity=".5"></svg:path><svg:path d="M16 17.429C16 18.849 14.88 20 13.5 20S11 18.849 11 17.429s1.12-2.572 2.5-2.572S16 16.008 16 17.43Zm0 0V11"></svg:path><svg:path stroke-linecap="round" d="m18.675 8.116l-1.755.842c-.341.164-.512.246-.636.373a1 1 0 0 0-.223.356c-.061.166-.061.355-.061.734c0 .877 0 1.315.191 1.578a1 1 0 0 0 .63.396c.319.058.714-.132 1.504-.51l1.755-.843c.341-.164.512-.246.636-.373a1 1 0 0 0 .223-.356C21 10.149 21 9.958 21 9.58c0-.876 0-1.315-.191-1.578a1 1 0 0 0-.63-.395c-.319-.059-.714.13-1.504.51Z"></svg:path></svg:g>`,
})
export class SolarPlaylistMinimalistic3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

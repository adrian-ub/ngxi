import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOscillatorIcon],svg[icon-park-twotone-oscillator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOscillator0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 9v15a6 6 0 0 0 6 6h22a6 6 0 0 0 6-6V9"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 10a6 6 0 0 1 6-6h22a6 6 0 0 1 0 12H13a6 6 0 0 1-6-6"></svg:path><svg:circle cx="15" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="21" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="10" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 30v14m10-14v14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOscillator0)"></svg:path>`,
})
export class IconParkTwotoneOscillatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

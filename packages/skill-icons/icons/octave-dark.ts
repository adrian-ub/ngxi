import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsOctaveDarkIcon],svg[skill-icons-octave-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="url(#skillIconsOctaveDark0)" d="M61.852 48.773c-31.004 33.693-23.49 96.481 16.773 140.237c40.264 43.755 98.033 51.91 129.037 18.218c31.004-33.693 23.511-96.484-16.753-140.24c-40.263-43.755-98.053-51.907-129.057-18.215M89.965 62.77c24.361-26.473 69.152-20.715 100.052 12.865s36.199 82.255 11.838 108.728c-24.361 26.474-69.164 20.728-100.063-12.852S65.605 89.242 89.965 62.769"></svg:path><svg:path fill="#FF7F2A" stroke="#D45500" stroke-width="6.289" d="M196.287 60.738h-16.771a4.59 4.59 0 0 0-4.592 4.593V82.1a4.59 4.59 0 0 0 4.592 4.593h16.771a4.59 4.59 0 0 0 4.593-4.592V65.33a4.59 4.59 0 0 0-4.593-4.592ZM79.319 94.933H39.816C33.843 94.933 29 99.776 29 105.75v39.503c0 5.973 4.843 10.816 10.816 10.816H79.32c5.973 0 10.816-4.843 10.816-10.816V105.75c0-5.973-4.843-10.816-10.816-10.816Zm138.077 80.033h-23.865a6.535 6.535 0 0 0-6.535 6.535v23.865a6.535 6.535 0 0 0 6.535 6.535h23.865a6.535 6.535 0 0 0 6.535-6.535v-23.865a6.535 6.535 0 0 0-6.535-6.535Z"></svg:path><svg:defs><svg:radialgradient id="skillIconsOctaveDark0" cx="0" cy="0" r="1" gradientTransform="matrix(203.66396 -221.32779 735.74082 677.0225 89.315 200.308)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#008CBE"></svg:stop><svg:stop offset="1" stop-color="#B2FFFF"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class SkillIconsOctaveDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

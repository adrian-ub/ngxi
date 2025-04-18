import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWifiIcon],svg[icon-park-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 18.9653C4.5888 18.4073 5.19522 17.8786 5.8174 17.3792C17.0371 8.37423 33.3821 8.90292 44 18.9653"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 25.799C30.268 18.067 17.732 18.067 10 25.799"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 32.3137C27.5817 27.8954 20.4183 27.8954 16 32.3137"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkWifiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

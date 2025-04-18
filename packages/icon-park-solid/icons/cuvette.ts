import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCuvetteIcon],svg[icon-park-solid-cuvette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCuvette0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M18 10h12v17l14 14v3H4v-3l14-14z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M40.5 37.5L37 34l-3.5-3.5m7 7L37 34l-3.5-3.5m-19 0L11 34l-3.5 3.5m7-7L11 34l-3.5 3.5M18 4h12"></svg:path><svg:path stroke="#000" d="M24 27v1m0-10v3"></svg:path><svg:path stroke="#fff" d="M10 35h28"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCuvette0)"></svg:path>`,
})
export class IconParkSolidCuvetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMkIcon],svg[flagpack-mk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F50100" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackMk0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill="#FFD018" mask="url(#flagpackMk0)"><svg:path fill-rule="evenodd" d="M0-.042v4.084l14 5.951L3.255-.042zM16 12l3-12h-6zm0 0l-3 12h6zM0 19.951v4.084h3.255L14 14zM32 4.066V-.018h-3.255L18 10.018zm0 19.994v-4.084l-14-5.952L28.745 24.06zM32 9l-12 3l12 3zm-20 3L0 9v6z" clip-rule="evenodd"></svg:path><svg:path stroke="#F50100" stroke-width="2" d="M16 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackMkIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

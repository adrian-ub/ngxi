import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidACaneIcon],svg[icon-park-solid-a-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="svgIDb"><svg:g fill="none"><svg:g clip-path="url(#svgIDa)"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.557 44.768L33.641 18.28c1.174-2.207 3.812-9.299-3.252-13.055C23.326 1.47 19.157 7.181 17.75 9.83"></svg:path></svg:g><svg:defs><svg:clippath id="svgIDa"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDb)"></svg:path>`,
})
export class IconParkSolidACaneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

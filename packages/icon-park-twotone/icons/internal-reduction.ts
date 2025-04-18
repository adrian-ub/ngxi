import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneInternalReductionIcon],svg[icon-park-twotone-internal-reduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTInternalReduction0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 42h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M42 8a2 2 0 0 0-2-2H28v14h14z" clip-rule="evenodd"></svg:path><svg:path d="M23 25L13 35m0 0v-7m0 7h7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTInternalReduction0)"></svg:path>`,
})
export class IconParkTwotoneInternalReductionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

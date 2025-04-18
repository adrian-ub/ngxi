import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDifferenceSetIcon],svg[icon-park-twotone-difference-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDifferenceSet0"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 40V19a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2M42 8v21a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V19a2 2 0 0 0-2-2H19a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDifferenceSet0)"></svg:path>`,
})
export class IconParkTwotoneDifferenceSetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

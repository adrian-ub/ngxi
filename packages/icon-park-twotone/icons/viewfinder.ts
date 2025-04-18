import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneViewfinderIcon],svg[icon-park-twotone-viewfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTViewfinder0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M13 33V18h6l2-3h6l2 3h6v15z"></svg:path><svg:path fill="#555" stroke-miterlimit="10" d="M24 28a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTViewfinder0)"></svg:path>`,
})
export class IconParkTwotoneViewfinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

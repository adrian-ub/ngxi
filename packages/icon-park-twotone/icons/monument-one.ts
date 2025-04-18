import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMonumentOneIcon],svg[icon-park-twotone-monument-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMonumentOne0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 38h20v6H14z"></svg:path><svg:path fill="#555" d="m18 38l2-29l4-5l4 5l2 29z"></svg:path><svg:path stroke-linecap="round" d="M4 44h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMonumentOne0)"></svg:path>`,
})
export class IconParkTwotoneMonumentOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

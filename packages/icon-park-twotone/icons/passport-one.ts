import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePassportOneIcon],svg[icon-park-twotone-passport-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPassportOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" d="M13 40H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4"></svg:path><svg:rect width="34" height="28" x="13" y="44" fill="#555" rx="2" transform="rotate(-90 13 44)"></svg:rect><svg:circle cx="27" cy="27" r="8"></svg:circle><svg:path stroke-linecap="round" d="M35 28s-3-.5-5 1s-2.599 5.102-2 6m-4-8c0 2-2 4-4 4m11-11s0 4-3 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPassportOne0)"></svg:path>`,
})
export class IconParkTwotonePassportOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneClueIcon],svg[icon-park-twotone-clue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTClue0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M37 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM11 42a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" d="M37 16v19.504A6.496 6.496 0 0 1 30.504 42v0a6.496 6.496 0 0 1-6.496-6.496v-23A6.504 6.504 0 0 0 17.504 6v0A6.504 6.504 0 0 0 11 12.504V32"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTClue0)"></svg:path>`,
})
export class IconParkTwotoneClueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

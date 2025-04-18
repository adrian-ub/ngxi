import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEqualizerIcon],svg[icon-park-twotone-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEqualizer0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M11 16v26m13-13v13m0-23V6m13 0v26"></svg:path><svg:path fill="#555" d="M11 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm13 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm13 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEqualizer0)"></svg:path>`,
})
export class IconParkTwotoneEqualizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

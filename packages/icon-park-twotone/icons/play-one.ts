import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePlayOneIcon],svg[icon-park-twotone-play-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPlayOne0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M15 24V11.876l10.5 6.062L36 24l-10.5 6.062L15 36.124z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPlayOne0)"></svg:path>`,
})
export class IconParkTwotonePlayOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

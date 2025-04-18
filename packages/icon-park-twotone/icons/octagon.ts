import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneOctagonIcon],svg[icon-park-twotone-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTOctagon0"><svg:path fill="#555" stroke="#fff" stroke-width="4" d="M15.41 42.389L5.56 32.18A2 2 0 0 1 5 30.792V17.208a2 2 0 0 1 .56-1.39l9.85-10.207A2 2 0 0 1 16.85 5h14.3a2 2 0 0 1 1.44.611l9.85 10.208a2 2 0 0 1 .56 1.389v13.584a2 2 0 0 1-.56 1.39l-9.85 10.207a2 2 0 0 1-1.44.611h-14.3a2 2 0 0 1-1.44-.611Z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTOctagon0)"></svg:path>`,
})
export class IconParkTwotoneOctagonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

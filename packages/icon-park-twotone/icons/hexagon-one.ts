import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHexagonOneIcon],svg[icon-park-twotone-hexagon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHexagonOne0"><svg:path fill="#555" stroke="#fff" stroke-width="4" d="m23.029 43.46l-16-8.888A2 2 0 0 1 6 32.823V15.177a2 2 0 0 1 1.029-1.748l16-8.89a2 2 0 0 1 1.942 0l16 8.89A2 2 0 0 1 42 15.176v17.646a2 2 0 0 1-1.029 1.749l-16 8.888a2 2 0 0 1-1.942 0Z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHexagonOne0)"></svg:path>`,
})
export class IconParkTwotoneHexagonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

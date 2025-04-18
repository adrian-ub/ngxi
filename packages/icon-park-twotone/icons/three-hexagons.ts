import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneThreeHexagonsIcon],svg[icon-park-twotone-three-hexagons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTThreeHexagons0"><svg:g fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 27l-10-6l-10 6v12l10 6l10-6zm20 0l-10-6l-10 6v12l10 6l10-6z"></svg:path><svg:path d="M34 9L24 3L14 9v12l10 6l10-6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTThreeHexagons0)"></svg:path>`,
})
export class IconParkTwotoneThreeHexagonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDianziqianIcon],svg[icon-park-outline-dianziqian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m33 8l-9 5l10 6v10.214L14 18v11l20 12l9-5.893V13.893z"></svg:path><svg:path d="m24 35l-9 6l-10-6V14l10-6l9 5"></svg:path></svg:g>`,
})
export class IconParkOutlineDianziqianIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMilkOneIcon],svg[icon-park-outline-milk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 22h26v22H6z"></svg:path><svg:path d="M14 38V28l5 6l5-6v10m18-18L30 10M20 6v6l10-2V4zm12 16l10-2v21l-10 3zM19.482 12L6 22h26z"></svg:path></svg:g>`,
})
export class IconParkOutlineMilkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

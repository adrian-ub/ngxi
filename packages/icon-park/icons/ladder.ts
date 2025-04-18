import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLadderIcon],svg[icon-park-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 42C10 42 10 16 10 10C10 4 16 4 16 4"></svg:path><svg:path d="M10 14H28"></svg:path><svg:path d="M10 22H28"></svg:path><svg:path d="M10 30H28"></svg:path><svg:path d="M10 38H28"></svg:path><svg:path d="M34 43C34 43 34 17 34 11C34 5 40 5 40 5"></svg:path></svg:g>`,
})
export class IconParkLadderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

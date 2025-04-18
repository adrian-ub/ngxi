import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlugIcon],svg[icon-park-outline-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14h36v10q-6 12-18 12T6 24z"></svg:path><svg:path stroke-linecap="round" d="m33 34l-1 10H16l-1-10m7-10h4M16 4v8m16-8v8"></svg:path></svg:g>`,
})
export class IconParkOutlinePlugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

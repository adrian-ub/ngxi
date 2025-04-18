import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAnchorOneIcon],svg[icon-park-solid-anchor-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40 35c0-9.205-7.163-25-16-25S8 25.795 8 35"></svg:path><svg:path fill="currentColor" d="M4 35h8v8H4zM4 6h8v8H4zm32 29h8v8h-8zm0-29h8v8h-8z"></svg:path><svg:path stroke-linecap="round" d="M12 10h24"></svg:path></svg:g>`,
})
export class IconParkSolidAnchorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreeListIcon],svg[icon-park-solid-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M38 20H18v8h20zM32 6H18v8h14zm12 28H18v8h26z"></svg:path><svg:path stroke-linecap="round" d="M17 10H5m12 14H5m12 14H5m0 6V4"></svg:path></svg:g>`,
})
export class IconParkSolidTreeListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

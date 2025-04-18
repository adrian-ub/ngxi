import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTableLampIcon],svg[icon-park-solid-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m31 44l11-16l-20-16"></svg:path><svg:path fill="currentColor" d="m6 12l10 10l8-14l-4-4z"></svg:path><svg:path d="M38 44H12m5 0v-4"></svg:path></svg:g>`,
})
export class IconParkSolidTableLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

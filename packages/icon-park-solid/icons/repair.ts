import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRepairIcon],svg[icon-park-solid-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 14h12m-6 14V15m-2.857 27H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v9.717"></svg:path><svg:path fill="currentColor" d="m27 38l10.5-14.5L42 27L31 42h-4z"></svg:path></svg:g>`,
})
export class IconParkSolidRepairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

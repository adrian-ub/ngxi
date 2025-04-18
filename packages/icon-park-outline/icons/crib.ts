import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCribIcon],svg[icon-park-outline-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 6v38m-28-4h28m-28-6h28M6 12h36m-7-6h6M7 6h6m-3 0v38m7-32v16m7-16v16m7-16v16"></svg:path>`,
})
export class IconParkOutlineCribIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

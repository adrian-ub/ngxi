import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRecycleIcon],svg[picon-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6h6L4 1M0 6l3.5-6h1L8 6v1H0m4-3l3-3v3M3 5L0 2h3m2 3v3L3 6.5"></svg:path>`,
})
export class PiconRecycleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

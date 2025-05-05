import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconReadIcon],svg[picon-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2v5l3-1V1M1 1v5l2 1V2m5 5L3.5 8L0 7V0l3.5 1L8 0"></svg:path>`,
})
export class PiconReadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

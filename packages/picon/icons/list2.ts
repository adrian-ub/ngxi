import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconList2Icon],svg[picon-list2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v1h4V3M3 1v1h4V1M3 5v1h4V5M1 5v1h1V5M1 3v1h1V3M1 1v1h1V1"></svg:path>`,
})
export class PiconList2Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

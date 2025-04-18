import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDown2Icon],svg[subway-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M442.2 93.1L256 279.3L69.8 93.1L0 162.9l256 256l256-256z"></svg:path>`,
})
export class SubwayDown2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

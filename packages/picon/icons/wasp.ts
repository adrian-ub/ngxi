import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWaspIcon],svg[picon-wasp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3L5 8H3L0 3l2-1l1-1l-1-1h1l1 1l1-1h1L5 1l1 1M2 2v1h4V2M2 4v1h4V4M2 6l1 1h2l1-1"></svg:path>`,
})
export class PiconWaspIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}

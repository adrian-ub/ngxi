import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitRightIndentIcon],svg[uit-right-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.555 14a.5.5 0 0 0 .816.387l2.445-2a.5.5 0 0 0 0-.773l-2.445-2a.5.5 0 0 0-.633.773L20.71 12l-1.972 1.613a.5.5 0 0 0-.183.386M2.5 6.5h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m0 4h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1m19 3h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitRightIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

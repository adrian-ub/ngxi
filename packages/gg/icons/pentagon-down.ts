import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPentagonDownIcon],svg[gg-pentagon-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 8L7 6v10l5 2.5l5-2.5V6zm3 .954l-3 1.2l-3-1.2v5.81l3 1.5l3-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GgPentagonDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

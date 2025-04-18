import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpOutboxIcon],svg[ic-sharp-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14h2v-3h3l-4-4l-4 4h3z"></svg:path><svg:path fill="currentColor" d="M3 3v18h18V3zm16 11h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14z"></svg:path>`,
})
export class IcSharpOutboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

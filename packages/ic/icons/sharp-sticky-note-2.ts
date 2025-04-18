import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpStickyNote2Icon],svg[ic-sharp-sticky-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.99 3L3 21h12l6-6V3zM7 8h10v2H7zm5 6H7v-2h5zm2 5.5V14h5.5z"></svg:path>`,
})
export class IcSharpStickyNote2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

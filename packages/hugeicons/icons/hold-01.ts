import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHold01Icon],svg[hugeicons-hold-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5.5a1.5 1.5 0 0 1 3 0V12m-3-6.5v-2a1.5 1.5 0 0 0-3 0V5m3 .5V11m-3-6a1.5 1.5 0 0 0-3 0v8.462l-1.62-1.625a1.683 1.683 0 0 0-2.51.14a1.696 1.696 0 0 0-.033 2.072l3.6 4.598C8.126 19.527 8.5 20.883 8.5 22M11 5v5m7 12v-1.164a2.2 2.2 0 0 1 .565-1.44c.405-.462.912-1.102 1.104-1.604c.331-.865.331-1.952.331-4.125V7.5a1.5 1.5 0 0 0-3 0" color="currentColor"></svg:path>`,
})
export class HugeiconsHold01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

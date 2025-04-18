import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJusticeHammerIcon],svg[streamline-justice-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.29H8m-1 0v-2.5H1.5v2.5M7.787 1.002L4.202 4.587a1 1 0 0 0 0 1.414l1.584 1.584a1 1 0 0 0 1.414 0L10.785 4a1 1 0 0 0 0-1.414L9.2 1.002a1 1 0 0 0-1.414 0ZM9 5.79l4.5 4.5"></svg:path>`,
})
export class StreamlineJusticeHammerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

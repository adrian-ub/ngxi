import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpRight2Icon],svg[mage-direction-up-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.706 12.781l-5.316-.953a2.085 2.085 0 0 1-.167-3.96l14.11-4.992a2.084 2.084 0 0 1 2.673 2.673l-4.992 14.386a2.084 2.084 0 0 1-3.91-.098l-.914-5.572a2.02 2.02 0 0 0-1.484-1.484m5.571-3.979l-4.579 4.579"></svg:path>`,
})
export class MageDirectionUpRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

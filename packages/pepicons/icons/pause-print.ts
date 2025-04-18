import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPausePrintIcon],svg[pepicons-pause-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path d="M5.5 6a2 2 0 0 1 2-2h.706a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2V6Z"></svg:path><svg:path fill-rule="evenodd" d="M8.206 6H7.5v10h.706V6ZM7.5 4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.706a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.5Z" clip-rule="evenodd"></svg:path><svg:path d="M12.088 6a2 2 0 0 1 2-2h.706a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.706a2 2 0 0 1-2-2V6Z"></svg:path><svg:path fill-rule="evenodd" d="M14.794 6h-.706v10h.706V6Zm-.706-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.706a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-.706Z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M6.706 4H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.706a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1ZM6 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.706a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H6Zm7.294 1h-.706a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h.706a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-.706-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.706a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.706Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPausePrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageAttachmentIcon],svg[mage-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.948 7.308L7.42 12.835a2.607 2.607 0 1 0 3.689 3.688l5.982-5.982a4.55 4.55 0 0 0 0-6.452a4.55 4.55 0 0 0-6.4.065l-6.034 5.918a6.517 6.517 0 0 0 9.215 9.214l7.377-7.312"></svg:path>`,
})
export class MageAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

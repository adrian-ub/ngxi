import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHomeHeartIcon],svg[mage-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path d="M12 10.818c-.894-2.024-2.973-2.203-3.94-1.32c-.789.707-1.168 2.405-.448 3.968C8.854 16.153 12 17.564 12 17.564s3.146-1.411 4.388-4.098c.72-1.563.341-3.26-.447-3.969c-.968-.882-3.047-.703-3.941 1.321"></svg:path></svg:g>`,
})
export class MageHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

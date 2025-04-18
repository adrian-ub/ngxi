import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHeartSquareIcon],svg[mage-heart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9.402c-1.11-2.513-3.69-2.736-4.893-1.64c-.978.879-1.448 2.987-.555 4.927C8.094 16.025 12 17.777 12 17.777s3.907-1.752 5.448-5.088c.894-1.94.424-4.048-.555-4.928C15.691 6.666 13.11 6.89 12 9.401"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageHeartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

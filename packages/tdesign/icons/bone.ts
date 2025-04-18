import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBoneIcon],svg[tdesign-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3a1.5 1.5 0 0 0-1.318 2.217l.358.657L5.874 16.54l-.657-.358a1.5 1.5 0 1 0-.993 2.793l.676.125l.125.676a1.5 1.5 0 1 0 2.793-.993l-.358-.657L18.126 7.46l.657.358a1.5 1.5 0 1 0 .993-2.793L19.1 4.9l-.125-.676A1.5 1.5 0 0 0 17.5 3M14 4.5a3.5 3.5 0 0 1 6.764-1.264a3.5 3.5 0 0 1-2.218 6.632l-8.678 8.678a3.5 3.5 0 0 1-6.633 2.218a3.5 3.5 0 0 1 2.219-6.632l8.678-8.678A3.5 3.5 0 0 1 14 4.5"></svg:path>`,
})
export class TdesignBoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

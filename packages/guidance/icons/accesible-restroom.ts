import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAccesibleRestroomIcon],svg[guidance-accesible-restroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 13V6.5h-1.172a3 3 0 0 0-2.906 2.255l-.963 3.764M20 23.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-3.207M9 23.5a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11Zm5.35-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceAccesibleRestroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHubbleIcon],svg[arcticons-hubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.51" cy="34.906" r="6.99" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.966 41.879a7.99 7.99 0 0 1-7.136-5.75c-.934-3.226.227-6.554 2.076-8.64s18-19.578 18-19.578c1.572-1.951 3.56-2.238 5.295-1.29c1.335.73 2.158 2.582 1.145 4.874L21.298 36.397c-2.13 4.347-4.982 5.708-8.332 5.482"></svg:path>`,
})
export class ArcticonsHubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

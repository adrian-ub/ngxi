import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGlobalfreecallIcon],svg[arcticons-globalfreecall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.433 18.551v12.337A4.11 4.11 0 0 1 18.321 35h0a4.1 4.1 0 0 1-2.908-1.205"></svg:path><svg:rect width="8.224" height="10.897" x="14.209" y="18.551" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.112" ry="4.112" transform="rotate(180 18.321 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.005 29.449v-13.57A2.88 2.88 0 0 1 30.883 13h0c1.417 0 2.301.42 2.908 1.204m-8.224 4.347h5.757"></svg:path>`,
})
export class ArcticonsGlobalfreecallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

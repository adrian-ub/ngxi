import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKmitlUappIcon],svg[arcticons-kmitl-uapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.082 28.364L10.591 24M9.5 25.309l4.582-5.673m-4.582 0v8.728m20.254 0v-8.728m-2.836 0h5.673M14.98 26.929l1.262-7.292l2.871 8.726l2.873-8.726l1.491 8.726m1.984-8.726v8.726m8.675-8.726v8.726H38.5"></svg:path>`,
})
export class ArcticonsKmitlUappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

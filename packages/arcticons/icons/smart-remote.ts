import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartRemoteIcon],svg[arcticons-smart-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.119" cy="28.818" r="2.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.34 8.953c2.125-2.759 5.74-4.43 9.625-4.453c3.886-.022 7.527 1.61 9.694 4.344M19.6 12.978c.962-1.25 2.6-2.007 4.36-2.017s3.408.73 4.39 1.968"></svg:path><svg:rect width="12.48" height="25.477" x="17.808" y="18.023" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.361" ry="2.361"></svg:rect>`,
})
export class ArcticonsSmartRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsAppsSharpIcon],svg[famicons-apps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="112" height="112" x="48" y="48" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="200" y="48" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="352" y="48" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="48" y="200" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="200" y="200" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="352" y="200" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="48" y="352" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="200" y="352" fill="currentColor" rx="8" ry="8"></svg:rect><svg:rect width="112" height="112" x="352" y="352" fill="currentColor" rx="8" ry="8"></svg:rect>`,
})
export class FamiconsAppsSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

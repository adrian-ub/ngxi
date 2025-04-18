import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindowsNewIcon],svg[hugeicons-windows-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.072h1c3.98 0 5.97 0 7.36-1.39s1.39-3.38 1.39-7.36v-2c0-3.98 0-5.97-1.39-7.36s-3.38-1.39-7.36-1.39h-2c-3.98 0-5.97 0-7.36 1.39s-1.39 3.38-1.39 7.36v2c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39zm.75-1.5H13c3.56 0 5.35 0 6.3-.95s.95-2.74.95-6.3v-.25h-7.5zm7.5-9v-.25c0-3.56 0-5.35-.95-6.3s-2.74-.95-6.3-.95h-.25v7.5zm-9 9v-7.5h-7.5v.25c0 3.56 0 5.35.95 6.3s2.74.95 6.3.95zm-7.5-9h7.5v-7.5H11c-3.56 0-5.35 0-6.3.95s-.95 2.74-.95 6.3z" color="currentColor"></svg:path>`,
})
export class HugeiconsWindowsNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

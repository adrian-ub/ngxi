import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXododocsIcon],svg[arcticons-xododocs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.11 25.24V10s-12.83 1.65-12.83 6.33c0 5.06 18.22 7.75 18.22 7.75V40s-18.22-2.47-18.22-8.3c0-3.86 12.83-6.46 12.83-6.46M9.89 22.76V38s12.83-1.65 12.83-6.33c0-5.06-18.22-7.75-18.22-7.75V8.05s18.22 2.47 18.22 8.3c0 3.81-12.83 6.41-12.83 6.41"></svg:path>`,
})
export class ArcticonsXododocsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

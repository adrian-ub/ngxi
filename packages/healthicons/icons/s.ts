import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSIcon],svg[healthicons-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 14a4 4 0 0 0 0 8h4a8 8 0 1 1 0 16h-4a8 8 0 0 1-7.544-5.334a2 2 0 0 1 3.771-1.332A4 4 0 0 0 22 34h4a4 4 0 0 0 0-8h-4a8 8 0 1 1 0-16h4a8 8 0 0 1 7.544 5.334a2 2 0 0 1-3.771 1.332A4 4 0 0 0 26 14z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsSIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

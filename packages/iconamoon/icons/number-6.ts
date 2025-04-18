import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber6Icon],svg[iconamoon-number-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.847 4.532a1 1 0 1 0-1.694-1.064zm-6.92 7.264A1 1 0 0 0 8.62 12.86zM16 15a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6zm-4-4a4 4 0 0 1 4-4V9a6 6 0 0 0-6 6zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zm.153-7.532l-5.227 8.328L8.62 12.86l5.227-8.328z"></svg:path>`,
})
export class IconamoonNumber6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

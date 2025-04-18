import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSpace3d24FilledIcon],svg[fluent-space-3d-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25V15h-.812l-2.25-3H19.5V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25V12h1.563l-2.25 3H3zM15.692 16.5H21v1.25A3.25 3.25 0 0 1 17.75 21h-.667l-.367-1.224zm2.62-1.5h-3.089l-.937-3h1.777zm-7.789 0h3.129l-.938-3h-1.44zm3.598 1.5h-3.973L9.023 21h6.494l-.234-.78zM9.727 12l-.75 3h-3.29l2.25-3zm-1.125 4.5H3v1.25A3.25 3.25 0 0 0 6.25 21h1.227z"></svg:path>`,
})
export class FluentSpace3d24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

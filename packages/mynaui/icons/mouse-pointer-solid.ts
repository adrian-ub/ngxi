import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMousePointerSolidIcon],svg[mynaui-mouse-pointer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.348 5.706c-.486-1.457.9-2.844 2.358-2.358L18.645 7.66c1.627.543 1.72 2.808.145 3.483l-4.61 1.976l6.35 6.35a.75.75 0 1 1-1.06 1.061l-6.35-6.35l-1.977 4.61c-.675 1.576-2.94 1.481-3.482-.145z"></svg:path>`,
})
export class MynauiMousePointerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTumerDuotoneIcon],svg[lets-icons-tumer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="13" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M12 13V8"></svg:path><svg:path fill="currentColor" d="M20.354 5.354a.5.5 0 0 0-.707-.708zm-1.5 1.5l1.5-1.5l-.707-.708l-1.5 1.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M10.068 3.37c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 3c.44 0 .868.036 1.217.103s.6.161.715.268"></svg:path></svg:g>`,
})
export class LetsIconsTumerDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

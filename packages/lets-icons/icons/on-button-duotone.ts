import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOnButtonDuotoneIcon],svg[lets-icons-on-button-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M10.5 6.576c0-.18 0-.27-.062-.315s-.145-.018-.31.036a6 6 0 1 0 3.743 0c-.165-.054-.247-.08-.309-.036s-.062.135-.062.315V9a1.5 1.5 0 0 1-3 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M12 9V4m6.01 1.99a8.5 8.5 0 1 1-12.02 0"></svg:path></svg:g>`,
})
export class LetsIconsOnButtonDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

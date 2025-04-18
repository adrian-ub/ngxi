import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCancelFillIcon],svg[lets-icons-cancel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-4.828 2.757a5 5 0 0 0-6.929-6.929zM7.828 9.243l6.93 6.929a5 5 0 0 1-6.929-6.929M12 5a7 7 0 1 0 0 14a7 7 0 0 0 0-14" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCancelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

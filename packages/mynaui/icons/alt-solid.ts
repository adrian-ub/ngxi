import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAltSolidIcon],svg[mynaui-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.25a1 1 0 0 0 0 2h5.007l6.474 12.947a1 1 0 0 0 .894.553H21a1 1 0 1 0 0-2h-5.007L9.519 4.803a1 1 0 0 0-.894-.553zm11.25 0a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

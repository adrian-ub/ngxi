import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileCodeFilledIcon],svg[tdesign-file-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h10v8h8v3.265l-5.798 5.74l1.006.995H11v4H3z"></svg:path><svg:path fill="currentColor" d="M21 6.586V7h-6V1h.414zm-.113 11.419l2.776-2.749l-1.407-1.421l-4.212 4.17l4.212 4.17l1.407-1.422zM17.5 21H13v2h4.5z"></svg:path>`,
})
export class TdesignFileCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

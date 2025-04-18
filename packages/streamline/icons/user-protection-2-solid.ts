import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserProtection2SolidIcon],svg[streamline-user-protection-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h10.5C13.216 0 14 .783 14 1.75v3.257a9.31 9.31 0 0 1-6.57 8.895a1.45 1.45 0 0 1-.86 0A9.31 9.31 0 0 1 0 5.007zM7 6.5A2.25 2.25 0 1 0 7 2a2.25 2.25 0 0 0 0 4.5m4.152 2.893A5.5 5.5 0 0 0 7 7.5a5.5 5.5 0 0 0-4.152 1.893A7.8 7.8 0 0 0 7 12.465a7.8 7.8 0 0 0 4.152-3.072" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUserProtection2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

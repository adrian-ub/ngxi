import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAssignmentLateIcon],svg[ic-sharp-assignment-late-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-8 15h-2v-2h2zm0-4h-2V8h2zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcSharpAssignmentLateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

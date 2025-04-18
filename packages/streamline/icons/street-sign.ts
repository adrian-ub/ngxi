import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStreetSignIcon],svg[streamline-street-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 4.5H2.707a.5.5 0 0 1-.353-.146l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5A.5.5 0 0 1 2.707.5H7m0 7h4.293a.5.5 0 0 0 .353-.146l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.353-.146H7m0 7H2.707a.5.5 0 0 1-.353-.146l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .353-.146H7m0-6v13"></svg:path>`,
})
export class StreamlineStreetSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnArrowUnsortedIcon],svg[typcn-arrow-unsorted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.2 9.3L12 3L5.8 9.3c-.2.2-.3.4-.3.7s.1.5.3.7s.4.3.7.3h11c.3 0 .5-.1.7-.3s.3-.5.3-.7s-.1-.5-.3-.7M5.8 14.7L12 21l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7s-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3s-.3.5-.3.7s.1.5.3.7"></svg:path>`,
})
export class TypcnArrowUnsortedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

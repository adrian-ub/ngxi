import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsClosedCaptionsIcon],svg[proicons-closed-captions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="14.5" x="2.75" y="4.75" rx="4"></svg:rect><svg:path d="M10.5 14.382a2.75 2.75 0 1 1 0-4.764m7.125 4.764a2.75 2.75 0 1 1 0-4.764"></svg:path></svg:g>`,
})
export class ProiconsClosedCaptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

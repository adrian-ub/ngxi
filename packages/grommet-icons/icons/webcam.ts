import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsWebcamIcon],svg[grommet-icons-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="M20 22H4"></svg:path><svg:path d="M15.5 18v3m-7.5.5V18"></svg:path><svg:path d="M12 19a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z" clip-rule="evenodd"></svg:path><svg:path d="M12 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" clip-rule="evenodd"></svg:path><svg:path d="M12 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" clip-rule="evenodd"></svg:path><svg:path d="M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GrommetIconsWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherVolume1Icon],svg[feather-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5L6 9H2v6h4l5 4zm4.54 3.46a5 5 0 0 1 0 7.07"></svg:path>`,
})
export class FeatherVolume1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

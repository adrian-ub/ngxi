import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotMemberOfDuotoneIcon],svg[ph-not-member-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z" opacity=".2"></svg:path><svg:path d="M213.38 34.08a8 8 0 0 0-11.3.54L197.19 40H128a88 88 0 0 0-64.84 147.43l-21.08 23.19a8 8 0 1 0 11.84 10.76L75 198.2a87.5 87.5 0 0 0 53 17.8h72a8 8 0 0 0 0-16h-72a71.63 71.63 0 0 1-42.18-13.7l45.72-50.3H200a8 8 0 0 0 0-16h-53.92l67.84-74.62a8 8 0 0 0-.54-11.3M74 175.53A71.7 71.7 0 0 1 56.46 136h53.46ZM56.46 120A72.08 72.08 0 0 1 128 56h54.64l-58.18 64Z"></svg:path></svg:g>`,
})
export class PhNotMemberOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRoundDistortionIcon],svg[icon-park-outline-round-distortion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" d="M24 44c-5.523 0-10-4.477-10-10s4.477-10 10-10s10-4.477 10-10S29.523 4 24 4"></svg:path><svg:path stroke-linecap="round" d="M44 24c0 5.523-4.477 10-10 10s-10-4.477-10-10s-4.477-10-10-10S4 18.477 4 24"></svg:path></svg:g>`,
})
export class IconParkOutlineRoundDistortionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

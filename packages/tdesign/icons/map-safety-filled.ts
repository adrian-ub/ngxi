import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSafetyFilledIcon],svg[tdesign-map-safety-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2 1.18V10h3V5.09l-5-2.952zM22 2.5V10h-5.5V4.767z"></svg:path><svg:path fill="currentColor" d="M22.498 11.998h-9v5.633a3 3 0 0 0 1.36 2.512l3.14 2.052l3.14-2.052a3 3 0 0 0 1.36-2.512z"></svg:path>`,
})
export class TdesignMapSafetyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

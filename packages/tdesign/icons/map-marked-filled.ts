import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapMarkedFilledIcon],svg[tdesign-map-marked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2.251 1.33V10H14.5V5.09l-5-2.952zM22 2.5V10h-5.5V4.767z"></svg:path><svg:path fill="currentColor" d="M22.25 11.996h-8.5V22.29l4.253-2.615l4.247 2.617z"></svg:path>`,
})
export class TdesignMapMarkedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

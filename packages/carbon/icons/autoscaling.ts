import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAutoscalingIcon],svg[carbon-autoscaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 28H12v-2h10V10H6v10H4V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M28 22h-2v-2h2V4H12v2h-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M10 14v2h4.586L3 27.586L4.414 29L16 17.414V22h2v-8z"></svg:path>`,
})
export class CarbonAutoscalingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalIftttIcon],svg[devicon-original-ifttt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 47.6h10.5v32.9H2V47.6zm59.8 0h-18V58h7.5v22.4h10.5V58h7.5V47.6h-7.5zm28.3 0H72.2V58h7.5v22.4h10.5V58h7.5V47.6h-7.6zm28.4 0h-17.9V58h7.5v22.4h10.5V58h7.5V47.6h-7.6zM40.8 58V47.6H16.9v32.9h10.5v-9h9V61h-9v-3h13.4z"></svg:path>`,
})
export class DeviconOriginalIftttIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

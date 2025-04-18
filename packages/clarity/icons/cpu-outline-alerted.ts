import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCpuOutlineAlertedIcon],svg[clarity-cpu-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.2 23.55H30v-5.4h2.2a.8.8 0 1 0 0-1.6H30V15.4h-2v12.5a.1.1 0 0 1-.1.1H8.1a.1.1 0 0 1-.1-.1V8.1a.1.1 0 0 1 .1-.1h12l1.15-2h-1.9V3.8a.8.8 0 1 0-1.6 0V6h-5.4V3.8a.8.8 0 1 0-1.6 0V6H8.1A2.1 2.1 0 0 0 6 8.1v1.45H3.8a.8.8 0 1 0 0 1.6H6v5.4H3.8a.8.8 0 1 0 0 1.6H6v5.4H3.8a.8.8 0 1 0 0 1.6H6v2.75A2.1 2.1 0 0 0 8.1 30h2.65v2.2a.8.8 0 1 0 1.6 0V30h5.4v2.2a.8.8 0 1 0 1.6 0V30h5.4v2.2a.8.8 0 1 0 1.6 0V30h1.55a2.1 2.1 0 0 0 2.1-2.1v-2.75h2.2a.8.8 0 1 0 0-1.6" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M12.06 24.57h11.77a.75.75 0 0 0 .75-.75V15.4h-1.5v7.67h-11Z" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-3--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCpuOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

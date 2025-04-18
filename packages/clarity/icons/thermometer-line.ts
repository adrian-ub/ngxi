import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityThermometerLineIcon],svg[clarity-thermometer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23.17V11.46h-2V23.2a3 3 0 1 0 2 0Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M26 15a1 1 0 0 0 0-2h-2.08v-2H26a1 1 0 0 0 0-2h-2.08V8a6 6 0 0 0-12 0v12.81a8 8 0 1 0 12-.2V19H26a1 1 0 0 0 0-2h-2.08v-2Zm-2 11a6 6 0 1 1-10.36-4.12l.27-.29V8a4 4 0 0 1 8 0v13.44l.3.29A6 6 0 0 1 24 26" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityThermometerLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSosHelpEmergencySignIcon],svg[streamline-sos-help-emergency-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.494 5.47a1.15 1.15 0 0 0-1.082-.764h-.888a1.024 1.024 0 0 0-.219 2.024l1.352.296a1.147 1.147 0 0 1-.245 2.268h-.765c-.5 0-.924-.319-1.082-.764m12.87-3.06a1.15 1.15 0 0 0-1.082-.764h-.888a1.024 1.024 0 0 0-.219 2.024l1.352.296a1.147 1.147 0 0 1-.245 2.268h-.764c-.5 0-.925-.319-1.082-.764M5.47 5.853v2.294c0 .634.514 1.147 1.148 1.147h.764c.634 0 1.148-.513 1.148-1.147V5.853c0-.633-.514-1.147-1.148-1.147h-.764c-.634 0-1.147.514-1.147 1.147Z"></svg:path>`,
})
export class StreamlineSosHelpEmergencySignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

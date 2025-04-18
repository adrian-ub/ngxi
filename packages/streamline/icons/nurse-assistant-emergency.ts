import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseAssistantEmergencyIcon],svg[streamline-nurse-assistant-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.031 5.531a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m4.407 1.5a.5.5 0 0 0-.5.5v1.407H7.53a.5.5 0 0 0-.5.5v1.624a.5.5 0 0 0 .5.5h1.407v1.407a.5.5 0 0 0 .5.5h1.624a.5.5 0 0 0 .5-.5v-1.406h1.407a.5.5 0 0 0 .5-.5V9.438a.5.5 0 0 0-.5-.5h-1.406V7.53a.5.5 0 0 0-.5-.5H9.437Zm-3.91 5.5H.531v-.542a4.51 4.51 0 0 1 5.116-4.422"></svg:path>`,
})
export class StreamlineNurseAssistantEmergencyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

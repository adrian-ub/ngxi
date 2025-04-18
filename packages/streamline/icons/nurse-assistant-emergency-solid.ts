import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNurseAssistantEmergencySolidIcon],svg[streamline-nurse-assistant-emergency-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m1.406 3.5a.5.5 0 0 0-.5.5v1.906H7a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.906V13.5a.5.5 0 0 0 .5.5h1.625a.5.5 0 0 0 .5-.5v-1.969H13.5a.5.5 0 0 0 .5-.5V9.406a.5.5 0 0 0-.5-.5h-1.969V7a.5.5 0 0 0-.5-.5zM5 7a5 5 0 0 1 2.478.656H7a1.75 1.75 0 0 0-1.75 1.75v1.625c0 .616.318 1.157.798 1.469H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNurseAssistantEmergencySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

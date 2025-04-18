import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAssistantDeviceOutlineIcon],svg[material-symbols-light-assistant-device-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8q-1.237 0-2.119.881T9 11t.881 2.119T12 14t2.119-.881T15 11t-.881-2.119T12 8m0 5q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4.001 3.77q.328 0 .548-.222t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22M5 20.231V7q0-1.671 1.165-2.835Q7.329 3 9 3h6q1.671 0 2.836 1.165Q19 5.329 19 7v13.23zM6 18h12V7q0-1.25-.875-2.125T15 4H9q-1.25 0-2.125.875T6 7zm0 0h12zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsLightAssistantDeviceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAssistantDeviceOutlineIcon],svg[material-symbols-assistant-device-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7q-1.65 0-2.825 1.175T8 11t1.175 2.825T12 15t2.825-1.175T16 11t-1.175-2.825T12 7m0 6q-.825 0-1.412-.587T10 11t.588-1.412T12 9t1.413.588T14 11t-.587 1.413T12 13m4 4q.425 0 .713-.288T17 16t-.288-.712T16 15t-.712.288T15 16t.288.713T16 17M4 22V7q0-2.075 1.463-3.537T9 2h6q2.075 0 3.538 1.463T20 7v15zm2-4h12V7q0-1.25-.875-2.125T15 4H9q-1.25 0-2.125.875T6 7zm0 0h12zm0 0h12z"></svg:path>`,
})
export class MaterialSymbolsAssistantDeviceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

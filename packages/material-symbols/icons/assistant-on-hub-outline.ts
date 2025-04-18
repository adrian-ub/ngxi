import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAssistantOnHubOutlineIcon],svg[material-symbols-assistant-on-hub-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 12q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288t-.712.288t-.288.712t.288.713t.712.287M7 12q.425 0 .713-.288T8 11t-.288-.712T7 10t-.712.288T6 11t.288.713T7 12m6.675 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M17 12q.425 0 .713-.288T18 11t-.288-.712T17 10t-.712.288T16 11t.288.713T17 12M4 16h16V6H4zm8 4q-2.475 0-4.237-.337T6 18.85V18H4q-.825 0-1.412-.587T2 16V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v10q0 .825-.587 1.413T20 18h-2v.85q0 .475-1.763.813T12 20m0-9"></svg:path>`,
})
export class MaterialSymbolsAssistantOnHubOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

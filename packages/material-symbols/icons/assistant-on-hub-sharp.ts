import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAssistantOnHubSharpIcon],svg[material-symbols-assistant-on-hub-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.325 12q.425 0 .713-.288t.287-.712t-.287-.712t-.713-.288t-.712.288t-.288.712t.288.713t.712.287M7 12q.425 0 .713-.288T8 11t-.288-.712T7 10t-.712.288T6 11t.288.713T7 12m6.675 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M17 12q.425 0 .713-.288T18 11t-.288-.712T17 10t-.712.288T16 11t.288.713T17 12m-5 8q-2.475 0-4.237-.337T6 18.85V18H2V4h20v14h-4v.85q0 .475-1.763.813T12 20"></svg:path>`,
})
export class MaterialSymbolsAssistantOnHubSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

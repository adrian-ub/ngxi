import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvWithAssistantSharpIcon],svg[material-symbols-tv-with-assistant-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12.5q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m3 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m-6 0q.425 0 .713-.288T8.5 11.5t-.288-.712T7.5 10.5t-.712.288t-.288.712t.288.713t.712.287m9 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M4 21v-2H2V4h20v15h-2v2h-1l-.65-2H5.675L5 21z"></svg:path>`,
})
export class MaterialSymbolsTvWithAssistantSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

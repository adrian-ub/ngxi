import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvWithAssistantRoundedIcon],svg[material-symbols-tv-with-assistant-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 12.5q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m3 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287m-6 0q.425 0 .713-.288T8.5 11.5t-.288-.712T7.5 10.5t-.712.288t-.288.712t.288.713t.712.287m9 0q.425 0 .713-.288t.287-.712t-.288-.712t-.712-.288t-.712.288t-.288.712t.288.713t.712.287M5.675 19l-.55 1.65q-.05.15-.175.25t-.3.1H4.5q-.2 0-.35-.15T4 20.5V19q-.825 0-1.412-.587T2 17V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v11q0 .825-.587 1.413T20 19v1.525q0 .2-.137.338t-.338.137h-.175q-.15 0-.275-.088t-.175-.237L18.35 19z"></svg:path>`,
})
export class MaterialSymbolsTvWithAssistantRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

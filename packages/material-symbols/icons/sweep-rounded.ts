import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSweepRoundedIcon],svg[material-symbols-sweep-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18q-.425 0-.712-.288T10 17t.288-.712T11 16h4q.425 0 .713.288T16 17t-.288.713T15 18zm-4.95-2.85l8.472-8.475q.3-.3.701-.3t.702.3t.3.713t-.3.712l-9.172 9.2q-.3.3-.701.3t-.702-.3l-4.3-4.294q-.3-.301-.288-.715q.013-.415.313-.716q.3-.3.713-.3t.712.3zM15 14q-.425 0-.712-.288T14 13t.288-.712T15 12h4q.425 0 .713.288T20 13t-.288.713T19 14zm4-4q-.425 0-.712-.288T18 9t.288-.712T19 8h4q.425 0 .713.288T24 9t-.288.713T23 10z"></svg:path>`,
})
export class MaterialSymbolsSweepRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

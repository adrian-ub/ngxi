import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsValveRoundedIcon],svg[material-symbols-valve-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5H8q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5h-3v2q0 .425-.288.713T12 8t-.712-.288T11 7zM4 20.025v-6.05q0-.425.288-.712T5 12.975t.713.288t.287.712V14h3v-3h-.025q-.425 0-.712-.288T7.974 10t.288-.712T8.975 9h6.05q.425 0 .713.288t.287.712t-.287.713t-.713.287H15v3h3v-.025q0-.425.288-.712t.712-.288t.713.288t.287.712v6.05q0 .425-.288.713t-.712.287t-.712-.287t-.288-.713V20H6v.025q0 .425-.288.713T5 21.024t-.712-.287T4 20.025"></svg:path>`,
})
export class MaterialSymbolsValveRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

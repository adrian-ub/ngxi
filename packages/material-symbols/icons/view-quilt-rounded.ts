import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewQuiltRoundedIcon],svg[material-symbols-view-quilt-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12Zm-10.175-.5q-.425 0-.712-.288t-.288-.712V6q0-.425.288-.712T10.825 5H20q.425 0 .713.288T21 6v4.5q0 .425-.288.713T20 11.5h-9.175Zm6.1 7.5q-.425 0-.712-.288T15.925 18v-4.5q0-.425.288-.712t.712-.288H20q.425 0 .713.288T21 13.5V18q0 .425-.288.713T20 19h-3.075Zm-6.1 0q-.425 0-.712-.288T9.824 18v-4.5q0-.425.288-.712t.712-.288h3.1q.425 0 .713.288t.287.712V18q0 .425-.288.713t-.712.287h-3.1ZM4 19q-.425 0-.713-.288T3 18V6q0-.425.288-.712T4 5h3.825q.425 0 .713.288T8.825 6v12q0 .425-.287.713T7.825 19H4Z"></svg:path>`,
})
export class MaterialSymbolsViewQuiltRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

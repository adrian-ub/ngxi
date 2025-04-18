import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsSystemDaydreamOutlineSharpIcon],svg[material-symbols-light-settings-system-daydream-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.154 14.904h6.5q.63 0 1.065-.434q.435-.435.435-1.064t-.435-1.065t-1.065-.437h-.512q-.046-1.217-.814-2.109t-1.948-.891q-.972 0-1.747.544t-1.014 1.456H9.09q-.835 0-1.386.582t-.55 1.418q0 .846.577 1.423t1.423.577m0-1q-.425 0-.713-.288t-.287-.712t.287-.713t.713-.287h1.307v-.25q0-.725.523-1.238q.522-.512 1.362-.512t1.353.666t.513 1.507v.827h1.442q.2 0 .35.15t.15.35t-.15.35t-.35.15zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightSettingsSystemDaydreamOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

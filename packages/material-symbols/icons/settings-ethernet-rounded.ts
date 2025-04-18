import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsEthernetRoundedIcon],svg[material-symbols-settings-ethernet-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.15 12L16.3 8.1q-.275-.275-.288-.687T16.3 6.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.687.288T16.3 17.3q-.275-.275-.275-.7t.275-.7zm-16.3 0l3.85 3.9q.275.275.288.688T7.7 17.3q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T1.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.688-.288T7.7 6.7q.275.275.275.7t-.275.7zM8 13q-.425 0-.712-.288T7 12t.288-.712T8 11t.713.288T9 12t-.288.713T8 13m4 0q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m4 0q-.425 0-.712-.288T15 12t.288-.712T16 11t.713.288T17 12t-.288.713T16 13"></svg:path>`,
})
export class MaterialSymbolsSettingsEthernetRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExtensionOffRoundedIcon],svg[material-symbols-extension-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-3.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V6q0-.425.15-.788t.425-.637l15.85 15.85q-.275.275-.638.425T18 21h-3.8q0-1.2-.762-2.1T11.5 18t-1.937.9T8.8 21zm15-3.85L6.85 4H9q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h4q.825 0 1.413.588T20 6v4q1.05 0 1.775.725T22.5 12.5t-.725 1.775T20 15zm-.925 4.75l-17-16.975q-.3-.3-.288-.712T2.1 3.5t.713-.3t.712.3l16.975 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3"></svg:path>`,
})
export class MaterialSymbolsExtensionOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

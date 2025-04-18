import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterAltOffRoundedIcon],svg[material-symbols-filter-alt-off-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.8 11.975L6.825 4H19q.625 0 .9.55t-.1 1.05zm-.8 4.85V19q0 .425-.288.713T13 20h-2q-.425 0-.712-.288T10 19v-6.175l-7.9-7.9q-.275-.275-.275-.687t.275-.713q.3-.3.713-.3t.712.3L20.5 20.5q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288z"></svg:path>`,
})
export class MaterialSymbolsFilterAltOffRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

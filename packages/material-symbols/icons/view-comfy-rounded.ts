import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewComfyRoundedIcon],svg[material-symbols-view-comfy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11q-.425 0-.712-.288T2 10V5q0-.425.288-.712T3 4h18q.425 0 .713.288T22 5v5q0 .425-.288.713T21 11zm8 9q-.425 0-.712-.288T10 19v-5q0-.425.288-.712T11 13h10q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20zm-8 0q-.425 0-.712-.288T2 19v-5q0-.425.288-.712T3 13h4q.425 0 .713.288T8 14v5q0 .425-.288.713T7 20z"></svg:path>`,
})
export class MaterialSymbolsViewComfyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

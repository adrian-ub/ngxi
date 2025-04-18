import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureSmallRoundedIcon],svg[material-symbols-picture-in-picture-small-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20q-.425 0-.712-.288T2 19t.288-.712T3 18h17V5q0-.425.288-.712T21 4t.713.288T22 5v13q0 .825-.587 1.413T20 20zm8-4q-.425 0-.712-.288T10 15v-4q0-.425.288-.712T11 10h6q.425 0 .713.288T18 11v4q0 .425-.288.713T17 16z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureSmallRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

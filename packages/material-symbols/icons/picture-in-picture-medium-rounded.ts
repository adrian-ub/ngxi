import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureMediumRoundedIcon],svg[material-symbols-picture-in-picture-medium-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16q-.425 0-.712-.288T8 15V9q0-.425.288-.712T9 8h8q.425 0 .713.288T18 9v6q0 .425-.288.713T17 16zm-6 4q-.425 0-.712-.288T2 19t.288-.712T3 18h17V5q0-.425.288-.712T21 4t.713.288T22 5v13q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureMediumRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

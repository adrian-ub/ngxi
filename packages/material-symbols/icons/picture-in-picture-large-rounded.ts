import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureLargeRoundedIcon],svg[material-symbols-picture-in-picture-large-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16q-.425 0-.712-.288T6 15V7q0-.425.288-.712T7 6h10q.425 0 .713.288T18 7v8q0 .425-.288.713T17 16zm-4 4q-.425 0-.712-.288T2 19t.288-.712T3 18h17V5q0-.425.288-.712T21 4t.713.288T22 5v13q0 .825-.587 1.413T20 20z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureLargeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

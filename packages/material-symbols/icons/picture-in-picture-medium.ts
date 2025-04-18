import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPictureInPictureMediumIcon],svg[material-symbols-picture-in-picture-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-2h18V4h2v14q0 .825-.587 1.413T20 20zm6-4V8h10v8z"></svg:path>`,
})
export class MaterialSymbolsPictureInPictureMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

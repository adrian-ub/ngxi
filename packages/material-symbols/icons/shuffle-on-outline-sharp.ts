import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShuffleOnOutlineSharpIcon],svg[material-symbols-shuffle-on-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 23V1h22v22H1Zm8.175-12.425l1.4-1.4L5.4 4L4 5.4l5.175 5.175ZM14 20h6v-6h-2v2.55l-3.15-3.15l-1.425 1.425L16.6 18H14v2Zm-8.6 0L18 7.4V10h2V4h-6v2h2.6L4 18.6L5.4 20Z"></svg:path>`,
})
export class MaterialSymbolsShuffleOnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatLetterSpacing2RoundedIcon],svg[material-symbols-light-format-letter-spacing-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.662 20.646q-.146.166-.354.156t-.354-.156l-2.388-2.388q-.243-.242-.243-.566t.243-.565l2.388-2.37q.146-.145.354-.155t.354.156q.146.146.146.357q0 .21-.146.356L4.94 17.192h14.12l-1.702-1.72q-.14-.147-.153-.348t.153-.366t.353-.166t.355.166l2.369 2.369q.242.242.242.565t-.242.566l-2.389 2.388q-.146.146-.354.156q-.207.01-.353-.156q-.147-.146-.147-.357q0-.21.147-.356l1.74-1.74H4.92l1.74 1.759q.141.146.144.347t-.143.347m1.207-7.98l3.56-9.374q.062-.14.174-.216t.26-.076h.354q.146 0 .258.085t.174.226l3.483 9.36q.073.233-.052.435t-.383.202q-.16 0-.272-.076t-.174-.236l-.923-2.527H9.685l-.935 2.533q-.061.14-.171.223t-.27.083q-.263 0-.39-.205q-.129-.205-.05-.437M10.004 9.6h3.992l-1.908-5.28h-.1z"></svg:path>`,
})
export class MaterialSymbolsLightFormatLetterSpacing2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

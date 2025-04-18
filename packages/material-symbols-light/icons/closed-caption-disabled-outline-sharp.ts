import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightClosedCaptionDisabledOutlineSharpIcon],svg[material-symbols-light-closed-caption-disabled-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.314 9.308l.884.884H7.577v3.616h2.615v-.577h.885v1.461H6.692V9.308zM7.817 5H20v12.183l-1-1V6H8.817zm9.49 8.23v1.232h-.028l-.885-.885h.029v-.346zm-.884-2.422v-.616h-2.615v.799l-.847-.847v-.836h4.347v1.5zm-5.534 1.502v-.006zM5.085 5.079l.92.921H5v12h11.579L1.887 3.308l.713-.714l19.223 19.223l-.713.714L17.579 19H4V5.079z"></svg:path>`,
})
export class MaterialSymbolsLightClosedCaptionDisabledOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

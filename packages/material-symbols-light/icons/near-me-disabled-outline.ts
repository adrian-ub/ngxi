import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNearMeDisabledOutlineIcon],svg[material-symbols-light-near-me-disabled-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.13 19.346l-2.426-6.088l-6.089-2.466l-.038-.63L9.664 8.24L4.166 2.743l.713-.713L21.97 19.12l-.713.714l-5.556-5.556l-1.94 5.067zm3.757-8.14l-.787-.767l1.616-4.193l-4.212 1.596l-.768-.767l6.687-2.536zm-3.453 6.171l1.487-3.879l-4.496-4.496l-3.879 1.487l4.9 1.988zm-.761-6.127"></svg:path>`,
})
export class MaterialSymbolsLightNearMeDisabledOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

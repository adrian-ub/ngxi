import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHowToRegOutlineIcon],svg[material-symbols-how-to-reg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13q.75 0 1.463.075t1.387.225l-1.75 1.75q-.275-.05-.537-.05H10q-1.775 0-3.187.425T4.5 16.35q-.225.125-.363.35T4 17.2v.8h6.25l2 2zm13.55.4l-3.45-3.45l1.4-1.4l2.05 2.05l5.05-5.05l1.4 1.4zM10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m0-2q.825 0 1.413-.587T12 8t-.587-1.412T10 6t-1.412.588T8 8t.588 1.413T10 10m0-2"></svg:path>`,
})
export class MaterialSymbolsHowToRegOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

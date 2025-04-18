import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlayShapesIcon],svg[material-symbols-play-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 11l5-9l5 9zm5 10q-1.65 0-2.825-1.175T3 17q0-1.65 1.175-2.825T7 13q1.65 0 2.825 1.175T11 17q0 1.65-1.175 2.825T7 21m6 0v-8h8v8zm1.4-10.5L13 9.1l2.6-2.6L13 3.9l1.4-1.4L17 5.1l2.6-2.6L21 3.9l-2.6 2.6L21 9.1l-1.4 1.4L17 7.9z"></svg:path>`,
})
export class MaterialSymbolsPlayShapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

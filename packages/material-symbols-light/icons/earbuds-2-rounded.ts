import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbuds2RoundedIcon],svg[material-symbols-light-earbuds-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.308 22q-.409 0-.695-.278t-.286-.703v-7.788q0-.31.23-.54t.54-.23h3.922q.425 0 .703.281q.278.28.278.681v2.846q0 .425-.278.703t-.703.278h-.923v3.77q0 .424-.278.702q-.277.278-.703.278zm-4.539-3.808q-1.416 0-2.44-.962t-1.025-2.384q0-1.401 1.025-2.373t2.44-.973h.635q.343 0 .575.232t.232.576v5.077q0 .343-.232.575t-.575.232zM4.885 12.54q-.425 0-.703-.278t-.278-.703v-3.77H2.98q-.425 0-.703-.277Q2 7.233 2 6.808V3.962q0-.401.278-.681Q2.556 3 2.981 3h3.923q.31 0 .54.23t.229.54v7.788q0 .425-.286.703t-.695.278zm5.711-3.808q-.343 0-.575-.232t-.232-.576V2.846q0-.343.232-.575t.575-.233h.635q1.416 0 2.44.975q1.025.974 1.025 2.378q0 1.424-1.025 2.382t-2.44.958z"></svg:path>`,
})
export class MaterialSymbolsLightEarbuds2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

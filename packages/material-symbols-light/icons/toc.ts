import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTocIcon],svg[material-symbols-light-toc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.885v-1h12.346v1zM4 12.5v-1h12.346v1zm0-3.384v-1h12.346v1zM19.385 16q-.262 0-.439-.171t-.177-.425q0-.27.177-.452q.177-.183.439-.183q.261 0 .438.183q.177.182.177.452q0 .253-.177.425t-.438.171m0-3.366q-.262 0-.439-.172T18.77 12q0-.253.177-.425t.439-.171t.438.171T20 12q0 .29-.177.463q-.177.172-.438.172m0-3.404q-.262 0-.439-.172t-.177-.424q0-.27.177-.452q.177-.183.438-.183q.262 0 .439.183q.177.182.177.452q0 .253-.177.424q-.177.172-.438.172"></svg:path>`,
})
export class MaterialSymbolsLightTocIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelImportantOutlineIcon],svg[material-symbols-light-label-important-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 19l5.5-7L3 4.98h11.673q.379 0 .717.156q.339.155.556.453L21 12l-5.034 6.392q-.218.299-.556.453q-.34.155-.718.155zm2-1h9.712q.154 0 .269-.058q.115-.057.211-.173L19.75 12l-4.558-5.788q-.096-.116-.211-.173q-.115-.058-.27-.058H5L9.75 12zm7.385-6.02"></svg:path>`,
})
export class MaterialSymbolsLightLabelImportantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

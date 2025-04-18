import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLabelImportantIcon],svg[material-symbols-light-label-important-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 19l5.5-7L3 4.98h11.673q.379 0 .718.156q.338.155.555.453L21 12l-5.034 6.392q-.218.299-.556.453t-.718.155z"></svg:path>`,
})
export class MaterialSymbolsLightLabelImportantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

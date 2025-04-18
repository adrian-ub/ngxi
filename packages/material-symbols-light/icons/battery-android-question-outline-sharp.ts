import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBatteryAndroidQuestionOutlineSharpIcon],svg[material-symbols-light-battery-android-question-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.598 13.087h.804q0-.408.1-.716q.1-.307.382-.586q.405-.383.643-.763t.239-.841q0-.721-.481-1.134t-1.228-.413q-.665 0-1.1.327q-.434.326-.684.935l.737.31q.163-.387.424-.608q.26-.221.63-.221q.384 0 .644.231q.26.232.26.629q0 .327-.183.568t-.487.534q-.394.382-.547.796q-.153.413-.153.952M4 16.75h14.539v-9.5H4zm-1 1V6.25h16.539V10H21v4h-1.461v3.75zm1-1v-9.5zm6.321-1.384h1.358v-1.358H10.32z"></svg:path>`,
})
export class MaterialSymbolsLightBatteryAndroidQuestionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

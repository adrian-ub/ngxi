import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatH1OutlineRoundedIcon],svg[material-symbols-light-format-h1-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 16.5q-.213 0-.357-.144T6 16V8q0-.213.144-.356t.357-.144t.356.144T7 8v3.5h5V8q0-.213.144-.356t.357-.144t.356.144T13 8v8q0 .213-.144.356t-.357.144t-.356-.144T12 16v-3.5H7V16q0 .213-.144.356t-.357.144m11 0q-.212 0-.356-.144T17 16V8.5h-1.5q-.213 0-.356-.144T15 7.999t.144-.356t.356-.143h1.683q.357 0 .587.232t.23.576V16q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightFormatH1OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatH1RoundedIcon],svg[material-symbols-light-format-h1-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16.5q-.214 0-.357-.144T5.5 16V8q0-.213.144-.356t.357-.144t.356.144T6.5 8v3.5h5V8q0-.213.144-.356t.357-.144t.356.144T12.5 8v8q0 .213-.144.356t-.357.144t-.356-.144T11.5 16v-3.5h-5V16q0 .213-.144.356t-.357.144m11 0q-.212 0-.356-.144T16.5 16V8.5H15q-.213 0-.356-.144t-.144-.357t.144-.356T15 7.5h1.683q.357 0 .587.232t.23.576V16q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightFormatH1RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

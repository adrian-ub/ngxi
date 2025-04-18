import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatH2RoundedIcon],svg[material-symbols-light-format-h2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.5q-.214 0-.357-.144T3.5 16V8q0-.213.144-.356t.357-.144t.356.144T4.5 8v3.5h5V8q0-.213.144-.356t.357-.144t.356.144T10.5 8v8q0 .213-.144.356t-.357.144t-.356-.144T9.5 16v-3.5h-5V16q0 .213-.144.356t-.357.144m9.309 0q-.343 0-.576-.232t-.232-.576v-2.576q0-.667.475-1.141t1.14-.475h3.77q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173H13q-.213 0-.356-.144t-.144-.357t.144-.356T13 7.5h4.885q.666 0 1.14.475t.475 1.14v1.77q0 .666-.475 1.14t-1.14.475h-3.77q-.269 0-.442.173t-.173.443V15.5H19q.213 0 .356.144t.144.357t-.144.356T19 16.5z"></svg:path>`,
})
export class MaterialSymbolsLightFormatH2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDocsAddOnRoundedIcon],svg[material-symbols-light-docs-add-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20.475q-.214 0-.357-.144t-.143-.356v-2.5H14q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h2.5v-2.5q0-.212.144-.356t.357-.144t.356.144t.143.356v2.5H20q.213 0 .356.144t.144.357t-.144.356t-.356.143h-2.5v2.5q0 .213-.144.356t-.357.144M5 17.5q-.213 0-.356-.144t-.144-.357t.144-.356T5 16.5h6.517q-.017.265-.004.505q.012.24.03.495zm0-4q-.213 0-.356-.144t-.144-.357t.144-.356T5 12.5h8.804q-.287.208-.538.458q-.25.25-.485.542zm0-4q-.213 0-.356-.144T4.5 8.999t.144-.356T5 8.5h13q.213 0 .356.144t.144.357t-.144.356T18 9.5zm0-4q-.213 0-.356-.144T4.5 4.999t.144-.356T5 4.5h13q.213 0 .356.144t.144.357t-.144.356T18 5.5z"></svg:path>`,
})
export class MaterialSymbolsLightDocsAddOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalBarOutlineRoundedIcon],svg[material-symbols-light-local-bar-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.5v-6.462l-6.666-7.5q-.114-.123-.186-.284q-.071-.162-.071-.331q0-.4.271-.662T5.512 4h12.977q.392 0 .663.26t.271.655q0 .168-.071.333t-.186.29l-6.666 7.5V19.5h4q.213 0 .356.144t.144.357t-.144.356t-.356.143h-9q-.213 0-.356-.144T7 19.999t.144-.356t.356-.143zM7.45 7h9.1l1.8-2H5.65zM12 12.1L15.66 8H8.34zm0 0"></svg:path>`,
})
export class MaterialSymbolsLightLocalBarOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

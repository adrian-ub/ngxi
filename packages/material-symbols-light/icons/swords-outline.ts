import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwordsOutlineIcon],svg[material-symbols-light-swords-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.839 20.696l-3.06-3.054l-2.2 2.2l-.277-.276q-.46-.46-.46-1.137t.46-1.137l4.09-4.09q.46-.46 1.137-.46t1.137.46l.276.277l-2.2 2.2l3.054 3.06q.243.242.243.565t-.243.565l-.827.827q-.242.242-.565.242t-.565-.242M21 5.477L9.958 16.538l.74.735q.46.46.46 1.137t-.46 1.136l-.277.277l-2.2-2.2l-3.06 3.054q-.242.242-.565.242t-.565-.242l-.827-.827q-.242-.242-.242-.565t.242-.566l3.054-3.06l-2.2-2.2l.277-.276q.46-.46 1.136-.46q.677 0 1.137.46l.754.76L18.423 2.9H21zM8.35 9.425l.58-.594l.576-.6l-.575.6zm-.708.714L3 5.477V2.9h2.577L10.2 7.542l-.694.689L5.175 3.9H4v1.175l4.35 4.35zm1.608 5.686L20 5.075V3.9h-1.175L8.075 14.65zm0 0l-.58-.594l-.595-.581l.594.58z"></svg:path>`,
})
export class MaterialSymbolsLightSwordsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

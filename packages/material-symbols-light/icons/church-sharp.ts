import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChurchSharpIcon],svg[material-symbols-light-church-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 21.5v-7.27l4-1.774V9.154l5-2.52V4.347h-2v-1h2v-2h1v2h2v1h-2v2.289l5 2.519v3.302l4 1.775V21.5h-7.77v-5.077h-3.46V21.5zm9.505-8.385q.466 0 .788-.326q.323-.327.323-.794q0-.466-.327-.788q-.327-.323-.793-.323q-.467 0-.79.327q-.321.327-.321.793q0 .467.326.79q.327.321.793.321"></svg:path>`,
})
export class MaterialSymbolsLightChurchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

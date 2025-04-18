import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewInArSharpIcon],svg[material-symbols-view-in-ar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.05l-7-4.025v-8.05l7-4.025l7 4.025v8.05zM2 7V2h5v2H4v3zm5 15H2v-5h2v3h3zm10 0v-2h3v-3h2v5zm3-15V4h-3V2h5v5zM8.05 8.525l-1.05.6v1.125l4 2.325v4.6l1 .575l1-.575v-4.6l4-2.325V9.125l-1.05-.6L12 10.85z"></svg:path>`,
})
export class MaterialSymbolsViewInArSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

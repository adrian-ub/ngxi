import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKebabDiningIcon],svg[material-symbols-light-kebab-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.942 22.616v-4.5H5.885q-.84 0-1.42-.58t-.58-1.42t.58-1.42t1.42-.58h1.057V12.5H3.885v-4h3.057V6.884H5.885q-.84 0-1.42-.579q-.58-.58-.58-1.42t.58-1.42t1.42-.58h1.057v-1.5h.885v1.5h1.058q.84 0 1.42.58t.58 1.419t-.58 1.42t-1.42.58H7.827V8.5h3.058v4H7.826v1.616h1.057q.84 0 1.42.579q.58.58.58 1.42t-.58 1.42t-1.42.58H7.827v4.5zm9.231 0v-4.5h-1.057q-.84 0-1.42-.58t-.58-1.42t.58-1.42t1.42-.58h1.057V12.5h-3.057v-4h3.057V6.884h-1.057q-.84 0-1.42-.579q-.58-.58-.58-1.42t.58-1.42t1.42-.58h1.057v-1.5h.885v1.5h1.058q.84 0 1.42.58t.58 1.419t-.58 1.42t-1.42.58h-1.058V8.5h3.058v4h-3.058v1.616h1.057q.84 0 1.42.579q.58.58.58 1.42t-.58 1.42t-1.42.58h-1.057v4.5z"></svg:path>`,
})
export class MaterialSymbolsLightKebabDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

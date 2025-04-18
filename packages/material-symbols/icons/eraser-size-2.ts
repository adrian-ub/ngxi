import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEraserSize2Icon],svg[material-symbols-eraser-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 19.25q-1.25 0-2.125-.875T4.75 16.25q0-.575.225-1.137t.65-.988l8.5-8.5q.425-.425.988-.65t1.137-.225q1.25 0 2.125.875t.875 2.125q0 .575-.225 1.138t-.65.987l-8.5 8.5q-.425.425-.987.65t-1.138.225"></svg:path>`,
})
export class MaterialSymbolsEraserSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

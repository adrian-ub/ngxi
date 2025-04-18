import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSynagogueOutlineSharpIcon],svg[material-symbols-synagogue-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21V7q0-1.25.875-2.125T4 4t2.125.875T7 7v.3L12 3l5 4.3V7q0-1.25.875-2.125T20 4t2.125.875T23 7v14H13v-6h-2v6zM19 8h2V7q0-.425-.288-.712T20 6t-.712.288T19 7zM3 8h2V7q0-.425-.288-.712T4 6t-.712.288T3 7zm0 11h2v-9H3zm4 0h2v-6h6v6h2V9.925l-5-4.3l-5 4.3zm12 0h2v-9h-2zm-7-7.5q-.625 0-1.062-.437T10.5 10t.438-1.062T12 8.5t1.063.438T13.5 10t-.437 1.063T12 11.5"></svg:path>`,
})
export class MaterialSymbolsSynagogueOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

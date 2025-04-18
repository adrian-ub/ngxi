import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBackpackIcon],svg[radix-icons-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v3c0 .889-.387 1.687-1 2.236V11.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 11.5V8.236A3 3 0 0 1 0 6V3a1 1 0 0 1 1-1h4zm4 0v1H6V1zM1 3h13v3a1.996 1.996 0 0 1-2 2H8v-.5a.5.5 0 0 0-1 0V8H3a1.996 1.996 0 0 1-2-2zm6 6H3c-.35 0-.687-.06-1-.17v2.67a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.83c-.313.11-.65.17-1 .17H8v.5a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBackpackIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

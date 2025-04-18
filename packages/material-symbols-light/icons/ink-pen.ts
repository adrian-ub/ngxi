import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkPenIcon],svg[material-symbols-light-ink-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.948 12.533l-2.327-2.352l4.083-4.077l-.36-.36q-.154-.154-.461-.154t-.462.154l-4.879 4.879l-.707-.67l4.911-4.916q.485-.485 1.153-.485t1.153.485l.36.36l.827-.828q.242-.242.568-.242t.568.242l1.267 1.268q.243.242.224.53q-.02.287-.262.53zM6.462 20H4.135v-2.327l6.754-6.76l2.352 2.328z"></svg:path>`,
})
export class MaterialSymbolsLightInkPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlignKeyObjectIcon],svg[hugeicons-align-key-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 5.99v5.987m-2-7.983H6m4 15.966H6m-2-1.996V5.99m18-1.996a2 2 0 0 1-2 1.996c-1.105 0-2-.894-2-1.996s.895-1.996 2-1.996s2 .894 2 1.996m-16 0A2 2 0 0 1 4 5.99c-1.105 0-2-.894-2-1.996s.895-1.996 2-1.996s2 .894 2 1.996M6 19.96a2 2 0 0 1-2 1.996c-1.105 0-2-.893-2-1.996s.895-1.996 2-1.996s2 .894 2 1.996m9.537-.548l2.462-2.616m0 0l1.486-1.588c.182-.145.576-.39 1.108.097c.48.44 1.11 1.125 1.394 1.445M18 16.796l1.504 1.637m-3.506 2.053a1.51 1.51 0 0 1-1.505 1.515a1.51 1.51 0 0 1-1.505-1.515a1.51 1.51 0 0 1 1.505-1.515a1.51 1.51 0 0 1 1.505 1.515" color="currentColor"></svg:path>`,
})
export class HugeiconsAlignKeyObjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

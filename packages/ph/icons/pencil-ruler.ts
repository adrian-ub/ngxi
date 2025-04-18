import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilRulerIcon],svg[ph-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32h-48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176h-48v-32h24a8 8 0 0 0 0-16h-24v-24h24a8 8 0 0 0 0-16h-24V96h24a8 8 0 0 0 0-16h-24V48h48zM77.66 26.34a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 32 64v144a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V64a8 8 0 0 0-2.34-5.66ZM48 176V80h16v96Zm32-96h16v96H80Zm-8-36.69L92.69 64H51.31ZM48 208v-16h48v16Z"></svg:path>`,
})
export class PhPencilRulerIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSketchIcon],svg[tabler-brand-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.262 10.878l8 8.789c.4.44 1.091.44 1.491 0l8-8.79c.313-.344.349-.859.087-1.243L17.303 4.44a1 1 0 0 0-.823-.436H7.554a1 1 0 0 0-.823.436l-3.54 5.192c-.263.385-.227.901.087 1.246z"></svg:path>`,
})
export class TablerBrandSketchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

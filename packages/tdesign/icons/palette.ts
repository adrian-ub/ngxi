import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPaletteIcon],svg[tdesign-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-9 9c0 5.004 3.715 8.897 8.653 8.897h.003q-.071-.118-.156-.252l-.02-.032c-.4-.637-.71-1.466-.653-2.375c.059-.942.505-1.856 1.414-2.616c1.032-.863 2.263-.884 3.218-.847q.322.014.608.03c.758.041 1.358.074 1.947-.085c1.852-.5 2.881-1.73 2.988-3.323C21.323 6.62 17.115 3 12 3M1 12C1 5.925 5.925 1 12 1c5.931 0 11.418 4.286 10.998 10.53c-.173 2.566-1.908 4.431-4.463 5.12c-.932.252-1.932.193-2.708.148q-.24-.016-.447-.024c-.917-.036-1.45.043-1.855.381c-.527.441-.68.86-.702 1.208c-.024.38.106.796.35 1.185l.027.043c.096.153.236.374.352.605c.12.239.278.604.29 1.013a1.5 1.5 0 0 1-.7 1.338c-.425.275-.959.35-1.49.35C5.546 22.897 1 18.042 1 12m8.75-4.996a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-4.72 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9.488 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class TdesignPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

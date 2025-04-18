import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixListGraphicsIcon],svg[ix-list-graphics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.614 277.388v170.667H64.948V277.388zm213.334 0v170.667H278.281V277.388zm-256 42.667h-85.334v85.333h85.334zm213.333 0h-85.333v85.333h85.333zm-170.667-256V234.72H64.948V64.055zm213.334 0V234.72H278.281V64.055zm-42.667 42.666h-85.333v85.334h85.333z"></svg:path>`,
})
export class IxListGraphicsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

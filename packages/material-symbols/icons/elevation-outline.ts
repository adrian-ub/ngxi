import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElevationOutlineIcon],svg[material-symbols-elevation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.05 21l6.45-9h5.05L21 3.3V21zm1.75-5.825l-1.6-1.15L6.5 8h5.05l4.7-5.475l1.5 1.3L12.45 10H7.5zM5.95 19H19V8.7L14.45 14H9.5zM19 19"></svg:path>`,
})
export class MaterialSymbolsElevationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

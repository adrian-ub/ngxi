import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMapIcon],svg[uil-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.32 5.05l-6-2h-.07a.7.7 0 0 0-.14 0h-.43L9 5L3.32 3.05a1 1 0 0 0-.9.14A1 1 0 0 0 2 4v14a1 1 0 0 0 .68.95l6 2a1 1 0 0 0 .62 0l5.7-1.9L20.68 21a1.2 1.2 0 0 0 .32 0a.94.94 0 0 0 .58-.19A1 1 0 0 0 22 20V6a1 1 0 0 0-.68-.95M8 18.61l-4-1.33V5.39l4 1.33Zm6-1.33l-4 1.33V6.72l4-1.33Zm6 1.33l-4-1.33V5.39l4 1.33Z"></svg:path>`,
})
export class UilMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

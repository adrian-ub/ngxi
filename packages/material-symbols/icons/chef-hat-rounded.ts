import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChefHatRoundedIcon],svg[material-symbols-chef-hat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14q.425 0 .713-.288T11 13v-3q0-.425-.288-.712T10 9t-.712.288T9 10v3q0 .425.288.713T10 14m-5 2v-3.5q-1.15-.575-1.825-1.662T2.5 8.475Q2.5 6.6 3.788 5.3T6.95 4q.3 0 .613.05t.612.125Q8.8 3.15 9.8 2.575T12 2t2.2.575t1.625 1.6q.3-.075.6-.125T17.05 4q1.875 0 3.163 1.3T21.5 8.475q0 1.275-.675 2.363T19 12.5V16zm9-2q.425 0 .713-.288T15 13v-3q0-.425-.288-.712T14 9t-.712.288T13 10v3q0 .425.288.713T14 14m-7 8q-.825 0-1.412-.587T5 20v-2h14v2q0 .825-.587 1.413T17 22z"></svg:path>`,
})
export class MaterialSymbolsChefHatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

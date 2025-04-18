import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowMenuOpenRoundedIcon],svg[material-symbols-light-arrow-menu-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19.5v-15q0-.213.144-.356T10.501 4t.356.144T11 4.5v15q0 .213-.144.356t-.357.144t-.356-.144T10 19.5m3.385-4.873V9.392q0-.293.252-.398t.444.106l2.258 2.335q.223.242.223.565t-.223.566L14.08 14.9q-.192.212-.444.11t-.252-.383"></svg:path>`,
})
export class MaterialSymbolsLightArrowMenuOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

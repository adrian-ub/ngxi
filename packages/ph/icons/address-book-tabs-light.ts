import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAddressBookTabsLightIcon],svg[ph-address-book-tabs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m-18 68h20v52h-20Zm20-54v42h-20V46h18a2 2 0 0 1 2 2M46 208V48a2 2 0 0 1 2-2h130v164H48a2 2 0 0 1-2-2m162 2h-18v-44h20v42a2 2 0 0 1-2 2m-58.19-43.49A38 38 0 0 0 131.23 143a30 30 0 1 0-38.45 0a38 38 0 0 0-18.59 23.5a6 6 0 0 0 11.62 3C88.67 158.38 99.93 150 112 150s23.34 8.38 26.19 19.49a6 6 0 0 0 11.62-3ZM94 120a18 18 0 1 1 18 18a18 18 0 0 1-18-18"></svg:path>`,
})
export class PhAddressBookTabsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

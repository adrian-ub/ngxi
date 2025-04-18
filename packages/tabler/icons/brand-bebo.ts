import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandBeboIcon],svg[tabler-brand-bebo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.5a3.5 3.5 0 0 0 3.5-3.5c0-1.838-1.159-3.002-3.005-3.372c-.746-.15-1.37-.745-1.37-1.506c0-1.142.934-2.095 2.058-1.894C16.793 7.873 19 10.286 19 14a7 7 0 1 1-14 0V4.75a1.75 1.75 0 1 1 3.5 0V14a3.5 3.5 0 0 0 3.5 3.5"></svg:path>`,
})
export class TablerBrandBeboIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

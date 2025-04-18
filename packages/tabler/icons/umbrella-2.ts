import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrella2Icon],svg[tabler-umbrella-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.343 7.343a8 8 0 1 1 11.314 11.314zm5.485 5.997l-4.242 4.243a2 2 0 1 0 2.828 2.828"></svg:path>`,
})
export class TablerUmbrella2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

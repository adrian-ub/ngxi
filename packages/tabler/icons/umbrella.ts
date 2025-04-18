import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaIcon],svg[tabler-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 0 1 16 0zm8 0v6a2 2 0 0 0 4 0"></svg:path>`,
})
export class TablerUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUmbrellaClosedIcon],svg[tabler-umbrella-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 16l3-13l3 13zm3 0v3c0 2.667 4 2.667 4 0"></svg:path>`,
})
export class TablerUmbrellaClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

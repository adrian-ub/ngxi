import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAccessPointOffIcon],svg[tabler-access-point-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18M14.828 9.172A4 4 0 0 1 16 12m1.657-5.657a8 8 0 0 1 1.635 8.952m-10.124-.467a4 4 0 0 1 0-5.656m-2.831 8.485a8 8 0 0 1 0-11.314"></svg:path>`,
})
export class TablerAccessPointOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMessageCircleOffIcon],svg[tabler-message-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.595 4.577c3.223-1.176 7.025-.61 9.65 1.63c2.982 2.543 3.601 6.523 1.636 9.66m-1.908 2.109C15.186 20.166 11.083 20.642 7.7 19L3 20l1.3-3.9C2.071 12.804 2.806 8.589 5.98 6.043M3 3l18 18"></svg:path>`,
})
export class TablerMessageCircleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

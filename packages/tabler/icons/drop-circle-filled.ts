import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropCircleFilledIcon],svg[tabler-drop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.177 4.092a1 1 0 0 0-1.646 0l-2.602 3.764c-1.022 1.67-.634 3.736.875 4.929a4.144 4.144 0 0 0 5.095 0c1.51-1.191 1.897-3.26.904-4.882z"></svg:path>`,
})
export class TablerDropCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

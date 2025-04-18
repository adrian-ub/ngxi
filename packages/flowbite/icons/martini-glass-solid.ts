import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMartiniGlassSolidIcon],svg[flowbite-martini-glass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a1 1 0 0 0-.753 1.659L11 12.375V19H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-6.624l6.753-7.717A1 1 0 0 0 19 3zm10.046 4H8.954l-1.75-2h9.592z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteMartiniGlassSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWindowsSolidIcon],svg[flowbite-windows-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.005 12L3 6.408l6.8-.923v6.517H3.005ZM11 5.32L19.997 4v8H11zM20.067 13l-.069 8l-9.065-1.275L11 13zM9.8 19.58l-6.795-.931V13H9.8z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteWindowsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

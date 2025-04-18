import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWhiskeyGlassSolidIcon],svg[flowbite-whiskey-glass-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 6a1 1 0 0 0-.997 1.083l.848 10.166A3 3 0 0 0 8.84 20h6.319a3 3 0 0 0 2.99-2.75l.847-10.167A1 1 0 0 0 18 6zm1.503 7l-.416-5h9.826l-.417 5z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteWhiskeyGlassSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

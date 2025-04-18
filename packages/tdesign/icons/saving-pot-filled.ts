import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSavingPotFilledIcon],svg[tdesign-saving-pot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.802 22.5H5.198l-.788-3.544C3.09 18.37 1.444 17.353.295 16.21L0 15.916V8.501h1.934l.953-1.59l-1.248-3.12l1.134-.265c1.114-.258 2.57-.193 3.994.592l.02-.011a23 23 0 0 1 .712-.408a15 15 0 0 1 1.504-.741c.457-.185.892-.34 1.314-.468a6.5 6.5 0 0 0 12.25 4.35l.093.16c2.465 4.268 1.425 9.596-2.226 12.657l-.632 2.844h-5.604l-.445-2h-2.506zM4.5 11.5h2.004V9.496H4.5z"></svg:path><svg:path fill="currentColor" d="M16.5 0a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9"></svg:path>`,
})
export class TdesignSavingPotFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

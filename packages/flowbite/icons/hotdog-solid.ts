import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteHotdogSolidIcon],svg[flowbite-hotdog-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 2.535A4 4 0 0 1 12 2c.729 0 1.412.195 2 .535v18.93A4 4 0 0 1 12 22a4 4 0 0 1-2-.535zm3.207 5.172a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zm0 4.5a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414zm0 4.5a1 1 0 0 0-1.414-1.414l-1 1a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></svg:path><svg:path d="M8 3.028A4.5 4.5 0 0 0 4 7.5v9a4.5 4.5 0 0 0 4 4.473zm8 17.945a4.5 4.5 0 0 0 4-4.473v-9a4.5 4.5 0 0 0-4-4.472z"></svg:path></svg:g>`,
})
export class FlowbiteHotdogSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

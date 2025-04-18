import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBookMinimalisticLineDuotoneIcon],svg[solar-book-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"></svg:path><svg:path fill="currentColor" d="m6.121 16.102l-.194-.724zM3.276 18.03a.75.75 0 0 0 1.448.389zM6.25 16a.75.75 0 0 0 1.5 0zm1.5-13.5a.75.75 0 0 0-1.5 0zm.148 14.25h12v-1.5h-12zm0-1.5c-.882 0-1.47-.006-1.97.128l.387 1.449c.263-.07.605-.077 1.583-.077zm-1.97.128a3.75 3.75 0 0 0-2.652 2.651l1.448.389a2.25 2.25 0 0 1 1.591-1.591zM7.75 16V2.5h-1.5V16z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBookMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

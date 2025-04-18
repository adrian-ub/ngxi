import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVolcanoIcon],svg[tabler-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 8V7a2 2 0 1 0-4 0m10 1V7a2 2 0 1 1 4 0M4 20l3.472-7.812A2 2 0 0 1 9.3 11h5.4a2 2 0 0 1 1.828 1.188L20 20"></svg:path><svg:path d="M6.192 15.064A2 2 0 0 1 6.667 15c.527-.009 1.026.178 1.333.5c.307.32.806.507 1.333.5c.527.007 1.026-.18 1.334-.5c.307-.322.806-.509 1.333-.5c.527-.009 1.026.178 1.333.5c.308.32.807.507 1.334.5c.527.007 1.026-.18 1.333-.5c.307-.322.806-.509 1.333-.5q.243.005.472.064M12 8V4"></svg:path></svg:g>`,
})
export class TablerVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

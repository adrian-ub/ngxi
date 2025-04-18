import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBoldDuotoneIcon],svg[solar-pin-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.592 9.903l-1.483-1.484c-1.013-1.015-1.52-1.522-2.064-1.402s-.79.794-1.284 2.14l-.334.912c-.132.36-.197.539-.316.677a1 1 0 0 1-.18.166c-.148.107-.332.158-.7.26c-.83.228-1.246.342-1.402.614a.77.77 0 0 0-.102.386c.002.314.306.618.915 1.228l.447.448l-1.62 1.622a.75.75 0 0 0 1.062 1.06l1.618-1.621l.473.473c.613.613.92.92 1.235.92a.76.76 0 0 0 .379-.1c.274-.156.389-.574.619-1.41c.1-.368.152-.552.258-.7q.07-.098.16-.176c.138-.12.316-.187.673-.32l.922-.347c1.332-.5 1.998-.75 2.115-1.293s-.385-1.046-1.391-2.053"></svg:path>`,
})
export class SolarPinCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

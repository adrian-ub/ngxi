import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCloudsLineDuotoneIcon],svg[solar-clouds-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 12.353c0-2.472-1.607-4.573-3.845-5.338M6.285 18C3.92 18 2 16.104 2 13.765s1.919-4.236 4.286-4.236q.427.001.83.08m7.265-2.582a5.8 5.8 0 0 1 1.905-.321c.654 0 1.283.109 1.87.309M7.115 9.609a5.6 5.6 0 0 1-.354-1.962C6.762 4.528 9.32 2 12.476 2c2.94 0 5.361 2.194 5.68 5.015M7.115 9.609a4.3 4.3 0 0 1 1.55.634" opacity=".5"></svg:path><svg:path d="M17.048 15.142c.387-.13.804-.2 1.238-.2c.425 0 .834.067 1.215.192m-7.176 1.622a3 3 0 0 0-.54-.05C10.248 16.706 9 17.89 9 19.353S10.247 22 11.786 22h6.5C20.337 22 22 20.42 22 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227c0-1.949 1.662-3.529 3.714-3.529c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"></svg:path></svg:g>`,
})
export class SolarCloudsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

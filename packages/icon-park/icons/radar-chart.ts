import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarChartIcon],svg[icon-park-radar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23.9998 3L45.8741 18.8926L38 45H10L2.12549 18.8926L23.9998 3Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 45L31 37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 45L17 37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M2 19L12 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M46 19L36 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 3V13"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 13L30.0073 17.5706L36 22L31 37H17L12 22L17.9927 17.5706L24 13Z"></svg:path><svg:path stroke="#000" d="M7.59406 14.9194L2.12549 18.8926L4.09412 25.4194"></svg:path><svg:path stroke="#000" d="M8.03125 38.4731L9.99988 45H16.9999"></svg:path><svg:path stroke="#000" d="M31 45H38L39.9685 38.4731"></svg:path><svg:path stroke="#000" d="M40.4053 14.9194L45.8738 18.8926L43.9053 25.4194"></svg:path><svg:path stroke="#000" d="M29.4684 6.97315L23.9998 3L18.5312 6.97315"></svg:path></svg:g>`,
})
export class IconParkRadarChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

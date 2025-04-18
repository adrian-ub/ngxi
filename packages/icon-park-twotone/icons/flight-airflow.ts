import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFlightAirflowIcon],svg[icon-park-twotone-flight-airflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFlightAirflow0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path d="M6 25c0-9.941 8.283-18 18.5-18S43 15.059 43 25"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="m10 35l-1.064-5s-3.435 3.109-4.58 5.74C3.211 38.37 4.852 41 8 41h36l-8-5.978z"></svg:path><svg:path stroke-linejoin="round" d="M29 35L18 25h-3l2 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFlightAirflow0)"></svg:path>`,
})
export class IconParkTwotoneFlightAirflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

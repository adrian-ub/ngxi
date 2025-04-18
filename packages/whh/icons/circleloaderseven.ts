import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCircleloadersevenIcon],svg[whh-circleloaderseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 39.5-197.5T150 150l45 45q62-62 144-96.5T512 64V0q104 0 199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M240 240l46 46q-45 44-69.5 102.5T192 512q0 87 43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-160.5T672.5 235T512 192v-64q-78 0-148 29.5T240 240"></svg:path>`,
})
export class WhhCircleloadersevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

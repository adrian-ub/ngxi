import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDetectionIcon],svg[icon-park-detection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M6.45012 34.8494L10.4398 31.5017L10.9532 25.6319L18.9331 18.936L27.7107 11.5707L30.9026 8.8924C33.9875 6.30384 38.5867 6.70623 41.1753 9.79115C43.7638 12.8761 43.3615 17.4753 40.2765 20.0639L37.0847 22.7422L28.3071 30.1074L20.3272 36.8033L14.4598 36.2925L10.473 39.6379C9.14922 40.7487 7.17567 40.576 6.06492 39.2522C4.95548 37.9301 5.12794 35.9588 6.45012 34.8494Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M23.4365 9.71777L38.2075 27.3211"></svg:path><svg:path stroke-linecap="round" d="M18.5755 29.0002L24.3018 24.0002"></svg:path></svg:g>`,
})
export class IconParkDetectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

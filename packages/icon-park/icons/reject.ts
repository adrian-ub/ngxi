import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRejectIcon],svg[icon-park-reject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.0099 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V19.0304"></svg:path><svg:path d="M42 29.0347V41.0001C42 41.5524 41.5523 42.0001 41 42.0001H29.037"></svg:path><svg:path d="M42 29.0347H18"></svg:path><svg:path d="M23 23L17 29L23 35"></svg:path></svg:g>`,
})
export class IconParkRejectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

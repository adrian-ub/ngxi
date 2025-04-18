import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayToolBoxIcon],svg[subway-tool-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 149.3V448c0 23.5 19.1 42.7 42.7 42.7H64v-384H42.7C19.1 106.7 0 125.8 0 149.3m469.3-42.6H448v384h21.3c23.5 0 42.7-19.1 42.7-42.7V149.3c0-23.5-19.1-42.6-42.7-42.6m-362.6 384h298.7v-384H106.7zM213.3 64h85.3v21.3h42.7V64c0-23.5-19.1-42.7-42.7-42.7h-85.3c-23.5 0-42.7 19.1-42.7 42.7v21.3h42.7z"></svg:path>`,
})
export class SubwayToolBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

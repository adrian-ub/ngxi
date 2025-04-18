import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNintendoSwitchIcon],svg[icon-park-solid-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSNintendoSwitch0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 18c0-5.657 0-8.485 1.757-10.243C9.515 6 12.343 6 18 6h2v36h-2c-5.657 0-8.485 0-10.243-1.757C6 38.485 6 35.657 6 30zm36 0c0-5.657 0-8.485-1.757-10.243C38.485 6 35.657 6 30 6h-2v36h2c5.657 0 8.485 0 10.243-1.757C42 38.485 42 35.657 42 30z"></svg:path><svg:path stroke="#000" d="M35 13v2M13 33v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSNintendoSwitch0)"></svg:path>`,
})
export class IconParkSolidNintendoSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

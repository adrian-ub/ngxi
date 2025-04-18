import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPerfumerBottleIcon],svg[icon-park-solid-perfumer-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPerfumerBottle0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="17" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path fill="#fff" stroke="#fff" d="M14 7h20v10H14z"></svg:path><svg:path fill="#000" stroke="#000" d="M18 25h12v8H18z"></svg:path><svg:path stroke="#000" d="M30 29h13M5 29h13"></svg:path><svg:path stroke="#fff" d="M5 24v10m38-10v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPerfumerBottle0)"></svg:path>`,
})
export class IconParkSolidPerfumerBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

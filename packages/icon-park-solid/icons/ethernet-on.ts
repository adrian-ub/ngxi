import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEthernetOnIcon],svg[icon-park-solid-ethernet-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSEthernetOn0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" stroke-linejoin="round" d="M19 27h10v6H19zm-5-12h20v12H14z"></svg:path><svg:path stroke="#000" d="M21 19v-4m6 4v-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSEthernetOn0)"></svg:path>`,
})
export class IconParkSolidEthernetOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

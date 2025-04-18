import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRefrigeratorIcon],svg[icon-park-solid-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRefrigerator0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="9" y="4" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M9 22h28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M9 20v4m28-4v4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 29v4m0-22v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 40v4m-20-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRefrigerator0)"></svg:path>`,
})
export class IconParkSolidRefrigeratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

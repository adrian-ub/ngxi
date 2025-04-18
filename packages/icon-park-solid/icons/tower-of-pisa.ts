import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTowerOfPisaIcon],svg[icon-park-solid-tower-of-pisa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSTowerOfPisa0"><svg:g fill="none"><svg:g stroke="#fff" stroke-width="4" clip-path="url(#ipSTowerOfPisa1)"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path stroke-linejoin="round" d="m21.25 7.474l15.455 4.142L28 44H11L21.25 7.474Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m19.317 6.957l19.319 5.176M16.21 18.548l19.32 5.176"></svg:path><svg:path stroke-linecap="round" d="m25.482 20.932l1.036-3.864"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.105 30.14l19.319 5.175"></svg:path><svg:path stroke-linecap="round" d="m22.482 31.932l1.036-3.864"></svg:path><svg:rect width="10" height="4" x="25.183" y="4.387" stroke-linecap="round" stroke-linejoin="round" rx="1" transform="rotate(15 25.183 4.387)"></svg:rect><svg:path stroke-linecap="round" d="m19.482 42.932l1.036-3.864"></svg:path></svg:g><svg:defs><svg:clippath id="ipSTowerOfPisa1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTowerOfPisa0)"></svg:path>`,
})
export class IconParkSolidTowerOfPisaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

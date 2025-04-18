import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAfroPickIcon],svg[icon-park-twotone-afro-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAfroPick0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 4.372L4.03 21.342L26.656 43.97L43.627 27m-16.97-16.971l-16.97 16.97m22.626-11.313l-16.97 16.97M37.97 21.343L21 38.313"></svg:path><svg:path fill="#555" d="m16.05 41.849l4.243-4.243l-9.9-9.9l-4.242 4.243l2.121 2.122l1.414 4.242l4.243 1.414z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAfroPick0)"></svg:path>`,
})
export class IconParkTwotoneAfroPickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

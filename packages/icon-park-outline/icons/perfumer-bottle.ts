import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePerfumerBottleIcon],svg[icon-park-outline-perfumer-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="17" rx="2"></svg:rect><svg:path d="M14 7h20v10H14zm4 18h12v8H18zm12 4h13M5 29h13M5 24v10m38-10v10"></svg:path></svg:g>`,
})
export class IconParkOutlinePerfumerBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

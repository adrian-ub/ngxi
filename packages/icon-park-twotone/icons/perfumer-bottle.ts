import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePerfumerBottleIcon],svg[icon-park-twotone-perfumer-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPerfumerBottle0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="17" fill="#555" rx="2"></svg:rect><svg:path fill="#555" d="M14 7h20v10H14zm4 18h12v8H18z"></svg:path><svg:path d="M30 29h13M5 29h13M5 24v10m38-10v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPerfumerBottle0)"></svg:path>`,
})
export class IconParkTwotonePerfumerBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

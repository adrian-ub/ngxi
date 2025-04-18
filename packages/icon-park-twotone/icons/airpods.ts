import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAirpodsIcon],svg[icon-park-twotone-airpods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAirpods0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M36 4a9 9 0 0 0-9 9v31h6V21.488A9 9 0 0 0 36 22a9 9 0 0 0 8-4.873V8.873A9 9 0 0 0 36 4M12 4a9 9 0 0 1 9 9v31h-6V21.488A9 9 0 0 1 12 22a9 9 0 0 1-8-4.873V8.873A9 9 0 0 1 12 4"></svg:path><svg:path d="M15 13h-1m19 0h1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAirpods0)"></svg:path>`,
})
export class IconParkTwotoneAirpodsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

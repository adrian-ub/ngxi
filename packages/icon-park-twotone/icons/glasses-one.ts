import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGlassesOneIcon],svg[icon-park-twotone-glasses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGlassesOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="14.5" cy="24.5" r="6.5" fill="#555"></svg:circle><svg:circle r="6.5" fill="#555" transform="matrix(-1 0 0 1 33.5 24.5)"></svg:circle><svg:path d="M4 24h4m36 0h-4m-20-3c.5-2 2-4 4-4s3.5 2 4 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGlassesOne0)"></svg:path>`,
})
export class IconParkTwotoneGlassesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

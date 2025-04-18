import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMacDockIcon],svg[iconoir-mac-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8 17a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M2 17.5l2-1m18 1l-2-1"></svg:path></svg:g>`,
})
export class IconoirMacDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

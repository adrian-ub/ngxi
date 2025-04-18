import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMediaReelHIcon],svg[mage-media-reel-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.946 8h18.108M2.946 16h18.108M12 2.75v18.5m5-.324V16m0-8V3.184M7 20.926V16m0-8V3.184"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMediaReelHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

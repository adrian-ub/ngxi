import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStarCircleIcon],svg[mage-star-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11.737 6.71l-.569 1.693a4.32 4.32 0 0 1-2.757 2.76l-1.713.569a.287.287 0 0 0 0 .548l1.713.569a4.32 4.32 0 0 1 2.736 2.738l.569 1.715a.288.288 0 0 0 .547 0l.59-1.694a4.32 4.32 0 0 1 2.736-2.738l1.713-.569a.288.288 0 0 0 0-.547l-1.692-.591a4.32 4.32 0 0 1-2.757-2.76l-.569-1.715a.288.288 0 0 0-.547.022"></svg:path><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect></svg:g>`,
})
export class MageStarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

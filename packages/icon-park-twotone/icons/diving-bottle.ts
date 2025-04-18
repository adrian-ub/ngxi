import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDivingBottleIcon],svg[icon-park-twotone-diving-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDivingBottle0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="m4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40M14 11V4m17 7V4M21 8V4m17 4V4"></svg:path><svg:path d="M12 6h8m9 0h8"></svg:path><svg:rect width="8" height="24" x="10" y="11" rx="4"></svg:rect><svg:rect width="8" height="24" x="27" y="11" rx="4"></svg:rect><svg:path fill="#555" d="M27 15a4 4 0 0 1 8 0v4h-8zm-17 0a4 4 0 0 1 8 0v4h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDivingBottle0)"></svg:path>`,
})
export class IconParkTwotoneDivingBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

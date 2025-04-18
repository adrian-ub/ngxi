import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopFavoriteStarIcon],svg[streamline-desktop-favorite-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 8.475V10.5a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h3.541M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="m10.272.653l.836 1.682a.26.26 0 0 0 .214.155l1.857.282a.282.282 0 0 1 .155.486l-1.37 1.303a.27.27 0 0 0 0 .252l.262 1.847a.282.282 0 0 1-.418.301l-1.652-.874a.33.33 0 0 0-.272 0L8.23 6.96a.282.282 0 0 1-.418-.3l.311-1.848a.27.27 0 0 0-.048-.252l-1.37-1.313a.282.282 0 0 1 .155-.476L8.717 2.5a.26.26 0 0 0 .214-.155L9.767.663a.282.282 0 0 1 .505-.01"></svg:path></svg:g>`,
})
export class StreamlineDesktopFavoriteStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHackernewsIcon],svg[icomoon-free-hackernews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v16h16V0zm8.5 9.125V12.5h-1V9.125L4.766 4H5.9L8 7.938L10.1 4h1.134z"></svg:path>`,
})
export class IcomoonFreeHackernewsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

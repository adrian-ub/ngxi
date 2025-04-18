import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeWrenchIcon],svg[icomoon-free-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.671 12.779L8.475 6.611A4.5 4.5 0 0 0 3.193.193l2.6 2.6a1.003 1.003 0 0 1 0 1.414L4.207 5.793a1.003 1.003 0 0 1-1.414 0l-2.6-2.6a4.5 4.5 0 0 0 6.418 5.282l6.168 7.196a.914.914 0 0 0 1.358.052l1.586-1.586a.914.914 0 0 0-.052-1.358"></svg:path>`,
})
export class IcomoonFreeWrenchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitMasterCardIcon],svg[uit-master-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 5.204a6.7 6.7 0 0 0-3.25.843a6.7 6.7 0 0 0-3.25-.843a6.796 6.796 0 0 0 0 13.592a6.7 6.7 0 0 0 3.25-.843a6.7 6.7 0 0 0 3.25.843a6.796 6.796 0 0 0 0-13.592m-6.5 12.592a5.796 5.796 0 0 1 0-11.592c.792 0 1.575.166 2.298.487a6.805 6.805 0 0 0 0 10.618a5.7 5.7 0 0 1-2.298.487m3.25-1.02A5.8 5.8 0 0 1 9.5 12A5.8 5.8 0 0 1 12 7.223a5.813 5.813 0 0 1 0 9.554m3.25 1.02a5.7 5.7 0 0 1-2.298-.487a6.805 6.805 0 0 0 0-10.618a5.7 5.7 0 0 1 2.298-.487a5.796 5.796 0 0 1 0 11.592"></svg:path>`,
})
export class UitMasterCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

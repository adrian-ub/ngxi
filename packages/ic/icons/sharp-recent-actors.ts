import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRecentActorsIcon],svg[ic-sharp-recent-actors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v14h2V5zm-4 14h2V5h-2zM15 5H1v14h14zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25S5.75 11.24 5.75 10S6.76 7.75 8 7.75M12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25z"></svg:path>`,
})
export class IcSharpRecentActorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

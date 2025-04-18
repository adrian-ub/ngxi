import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyOutlineIcon],svg[mdi-trophy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2c-.9 0-2 1-2 2H8c0-1-1.1-2-2-2H2v9c0 1 1 2 2 2h2.2c.4 2 1.7 3.7 4.8 4v2.08C8 19.54 8 22 8 22h8s0-2.46-3-2.92V17c3.1-.3 4.4-2 4.8-4H20c1 0 2-1 2-2V2zM6 11H4V4h2zm10 .5c0 1.93-.58 3.5-4 3.5c-3.41 0-4-1.57-4-3.5V6h8zm4-.5h-2V4h2z"></svg:path>`,
})
export class MdiTrophyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconBookmarkSlashFill16Icon],svg[octicon-bookmark-slash-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.19 1.143a.75.75 0 1 0-.88 1.215L3 4.305v9.945a.75.75 0 0 0 1.206.596L8 11.944l3.794 2.902A.75.75 0 0 0 13 14.25v-2.703l1.81 1.31a.75.75 0 1 0 .88-1.214l-2.994-2.168l-.014-.01L4.196 3.32l-.014-.01zm2.934.203A.5.5 0 0 1 4.6 1h7.233C12.478 1 13 1.522 13 2.167v5.05a.5.5 0 0 1-.793.405l-7.9-5.717a.5.5 0 0 1-.183-.559"></svg:path>`,
})
export class OcticonBookmarkSlashFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

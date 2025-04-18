import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallVolleyballIcon],svg[tabler-ball-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20"></svg:path><svg:path d="M12 12a8 8 0 0 0-7.464 4.928m8.415-9.575a12 12 0 0 0-9.88 4.111"></svg:path><svg:path d="M12 12a8 8 0 0 0-.536-8.928m4.085 12.075a12 12 0 0 0 1.38-10.611"></svg:path></svg:g>`,
})
export class TablerBallVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

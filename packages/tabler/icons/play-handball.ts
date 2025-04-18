import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayHandballIcon],svg[tabler-play-handball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 21l3.5-2l-4.5-4l2-4.5"></svg:path><svg:path d="m7 6l2 4l5 .5l4 2.5l2.5 3M4 20l5-1l1.5-2M15 7a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path><svg:path fill="currentColor" d="M9.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class TablerPlayHandballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHandFingerRightIcon],svg[tabler-hand-finger-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8h8.5a1.5 1.5 0 0 1 0 3H13m.5 0h2a1.5 1.5 0 0 1 0 3H13m1.5 0a1.5 1.5 0 0 1 0 3H13"></svg:path><svg:path d="M13.5 17a1.5 1.5 0 1 1 0 3H9a6 6 0 0 1-6-6v-2v.208a6 6 0 0 1 2.7-5.012L6 7q.718-.468 5.728-3.286a1.5 1.5 0 0 1 2.022.536c.44.734.325 1.674-.28 2.28L12 8"></svg:path></svg:g>`,
})
export class TablerHandFingerRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsExpandIcon],svg[gravity-ui-arrows-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06l-.47-.47v8.88l.47-.47a.75.75 0 1 1 1.06 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l.47.47V3.56l-.47.47a.75.75 0 0 1-1.06-1.06zM1.22 7.47a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 1 0 1.06-1.06L2.81 8l1.22-1.22a.75.75 0 0 0-1.06-1.06zm13.56 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06L13.19 8l-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 8h11"></svg:path></svg:g>`,
})
export class GravityUiArrowsExpandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

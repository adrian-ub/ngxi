import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMachineRobotIcon],svg[hugeicons-machine-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 13V8A5 5 0 0 0 7 8v5c0 1.87 0 2.804.402 3.5A3 3 0 0 0 8.5 17.598C9.196 18 10.13 18 12 18s2.804 0 3.5-.402a3 3 0 0 0 1.098-1.098C17 15.804 17 14.87 17 13m1 8a2 2 0 1 1 4 0M2 21a2 2 0 1 1 4 0m7.992-13.5h.009M10 7.5h.009"></svg:path><svg:path d="M20 19v-4c0-1.886 0-2.828-.586-3.414S17.886 11 16 11H8c-1.886 0-2.828 0-3.414.586S4 13.114 4 15v4"></svg:path></svg:g>`,
})
export class HugeiconsMachineRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

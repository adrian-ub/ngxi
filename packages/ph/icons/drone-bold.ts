import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDroneBoldIcon],svg[ph-drone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.06 109.94a48 48 0 1 1 67.88-67.88A12 12 0 0 1 93 59a24 24 0 1 0-34 34a12 12 0 1 1-17 17ZM163 59a24 24 0 1 1 34 34a12 12 0 1 0 17 17a48 48 0 1 0-67.88-67.88a12 12 0 0 0 17 17Zm33.94 87a12 12 0 0 0 0 17A24 24 0 1 1 163 197a12 12 0 0 0-17 17a48 48 0 1 0 67.88-67.88a12 12 0 0 0-16.88-.06ZM93 197a24 24 0 1 1-34-34a12 12 0 0 0-17-17a48 48 0 1 0 67.88 67.88a12 12 0 1 0-17-17Zm71-88v38l24.49 24.48a12 12 0 0 1-17 17L147 164h-38l-24.51 24.49a12 12 0 0 1-17-17L92 147v-38L67.51 84.49a12 12 0 0 1 17-17L109 92h38l24.48-24.49a12 12 0 0 1 17 17Zm-48 31h24v-24h-24Z"></svg:path>`,
})
export class PhDroneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

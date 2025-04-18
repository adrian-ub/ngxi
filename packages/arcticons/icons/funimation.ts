import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFunimationIcon],svg[arcticons-funimation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.238 31.34c-.615 2.436-1.974 4.155-4.228 5.044c-2.623 1.036-5.305 1.025-7.931-.002c-1.95-.762-3.26-2.204-3.964-4.181c-.09-.253-.136-.521-.222-.86z"></svg:path>`,
})
export class ArcticonsFunimationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

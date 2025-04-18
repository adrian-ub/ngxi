import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFootballIcon],svg[hugeicons-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M11.708 9.349a.48.48 0 0 1 .584 0l2.253 1.705a.53.53 0 0 1 .18.58l-.86 2.758a.5.5 0 0 1-.473.358h-2.784a.5.5 0 0 1-.473-.358l-.86-2.759a.53.53 0 0 1 .18-.579zM12 9V5m3 6l4-1.5M14 15l2 3m-6-3.5L8 17m1-5.5l-4-1m4-8l3.017 2.122L15 2.5M2 12.8l3.197-2.361L3.555 6.72M19.47 18.853l-3.854-.698L14.266 22M20.03 6.196L18.803 9.39L22 11.75M8.01 21.407l.041-4.24l-4.048.044"></svg:path></svg:g>`,
})
export class HugeiconsFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

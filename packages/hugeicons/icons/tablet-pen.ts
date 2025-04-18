import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTabletPenIcon],svg[hugeicons-tablet-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0-4.243 0-6.364 1.318-7.682S6.758 3 11 3h2c4.243 0 6.364 0 7.682 1.318S22 7.758 22 12s0 6.364-1.318 7.682S17.242 21 13 21h-2c-4.243 0-6.364 0-7.682-1.318S2 16.242 2 12m4.5-9v18"></svg:path><svg:path d="m17.006 8.884l.608.606a1.31 1.31 0 0 1 0 1.856l-3.187 3.234a1.76 1.76 0 0 1-.92.483l-1.974.427a.438.438 0 0 1-.523-.52l.42-1.955c.066-.347.235-.667.485-.916l3.227-3.215a1.32 1.32 0 0 1 1.864 0"></svg:path></svg:g>`,
})
export class HugeiconsTabletPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailFishHook24RegularIcon],svg[fluent-mail-fish-hook-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2.5 1c0 1.12-.736 2.067-1.75 2.386V9.25a2.25 2.25 0 0 0 4.5 0V9h-1.25a.75.75 0 0 1-.53-1.28l2-2a.75.75 0 0 1 1.28.53v3a3.75 3.75 0 1 1-7.5 0V6.886A2.501 2.501 0 1 1 18.75 4.5M12.785 4H5.25l-.184.005A3.25 3.25 0 0 0 2 7.25v9.5l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75v-3.627a4.7 4.7 0 0 1-1.5.71v2.917l-.006.143A1.75 1.75 0 0 1 18.75 18.5H5.25l-.144-.006A1.75 1.75 0 0 1 3.5 16.75V9.374l8.15 4.29l.097.042a.75.75 0 0 0 .602-.042l3.064-1.613a4.7 4.7 0 0 1-.683-1.336L12 12.153L3.5 7.679V7.25l.006-.144A1.75 1.75 0 0 1 5.25 5.5h7.645a3.5 3.5 0 0 1-.11-1.5"></svg:path>`,
})
export class FluentMailFishHook24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

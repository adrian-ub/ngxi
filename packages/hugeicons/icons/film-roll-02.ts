import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFilmRoll02Icon],svg[hugeicons-film-roll-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="10.5" cy="10.5" r="8.5"></svg:circle><svg:path d="M10.5 10.5h.008M14 7l-1 1m-5 5l-1 1m7 0l-1-1M8 8L7 7m6.5 11.5l5.823-.965C20.719 17.292 22 18.35 22 19.75c0 1.243-1.021 2.25-2.281 2.25H18.7"></svg:path></svg:g>`,
})
export class HugeiconsFilmRoll02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

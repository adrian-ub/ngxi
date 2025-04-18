import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEpisodesIcon],svg[system-uicons-episodes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 16.5v-6a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2"></svg:path><svg:path d="M16.5 16.5V9.505a3 3 0 0 0-3-3h-.005L4.5 6.521"></svg:path><svg:path d="M18.5 14.5V8.507a4 4 0 0 0-4-4h-.007L6.5 4.52"></svg:path></svg:g>`,
})
export class SystemUiconsEpisodesIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}

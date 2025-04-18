import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirMultiWindowIcon],svg[iconoir-multi-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 19v-8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M6.5 16H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 12h1M5 7h1"></svg:path></svg:g>`,
})
export class IconoirMultiWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

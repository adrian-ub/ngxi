import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGlassesIcon],svg[lets-icons-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M3 14v1a4 4 0 0 0 4 4v0a3 3 0 0 0 3-3v-1a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1a3 3 0 0 0 3 3v0a4 4 0 0 0 4-4v-1"></svg:path><svg:path stroke-linejoin="round" d="M14 14h7l-2.675-8.025c-.2-.6-.715-1.04-1.338-1.144v0A1.706 1.706 0 0 0 15 6.514V7m-5 7H3l2.675-8.025c.2-.6.715-1.04 1.338-1.144v0A1.706 1.706 0 0 1 9 6.514V7"></svg:path></svg:g>`,
})
export class LetsIconsGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPipeLightIcon],svg[lets-icons-pipe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.817 16.245a7.499 7.499 0 1 0 6.768-11.722l.277 1.035a6.5 6.5 0 1 1-6.01 10.41z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" d="M5.912 4.066A10 10 0 0 1 8.46 2.647c.42-.158.63-.238.827-.136c.197.1.26.332.384.796l2.07 7.727c.122.455.183.683.08.862c-.104.18-.332.24-.787.363l-7.727 2.07c-.464.124-.695.187-.882.066c-.186-.12-.222-.341-.294-.784a10 10 0 0 1 3.781-9.545Z"></svg:path></svg:g>`,
})
export class LetsIconsPipeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

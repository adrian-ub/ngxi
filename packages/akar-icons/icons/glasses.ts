import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsGlassesIcon],svg[akar-icons-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="14" r="4"></svg:circle><svg:circle cx="18" cy="14" r="4"></svg:circle><svg:path d="m10 14l.211-.106a4 4 0 0 1 3.578 0L14 14m5-8l2.838 6.623a2 2 0 0 1 .162.788V14M5 6l-2.838 6.623A2 2 0 0 0 2 13.41V14"></svg:path></svg:g>`,
})
export class AkarIconsGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

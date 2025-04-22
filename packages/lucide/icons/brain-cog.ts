import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBrainCogIcon],svg[lucide-brain-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10.852 14.772l-.383.923m.383-6.467l-.383-.923m2.679 6.467l.382.924m.001-7.391l-.383.923m1.624 1.624l.923-.383m-.923 2.679l.923.383M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446a3 3 0 0 0-.368 1.571a4 4 0 0 0-2.525 5.771"></svg:path><svg:path d="M17.998 5.125a4 4 0 0 1 2.525 5.771"></svg:path><svg:path d="M19.505 10.294a4 4 0 0 1-1.5 7.706"></svg:path><svg:path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516"></svg:path><svg:path d="M4.5 10.291A4 4 0 0 0 6 18m.002-12.875a3 3 0 0 0 .4 1.375m2.826 4.352l-.923-.383m.923 2.679l-.923.383"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class LucideBrainCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

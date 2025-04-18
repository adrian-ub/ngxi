import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThangsIcon],svg[arcticons-thangs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9.919" cy="23.964" r="2.77"></svg:circle><svg:path d="M9.656 17.844h14.159A6.14 6.14 0 0 1 29.97 24v6.156H9.656C6.246 30.156 3.5 27.41 3.5 24s2.745-6.156 6.156-6.156"></svg:path><svg:circle cx="23.677" cy="23.964" r="2.77"></svg:circle></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="38.247" cy="24" r="2.638"></svg:circle><svg:path d="M44.5 24c0 3.4-2.756 6.156-6.156 6.156h-6.156V24A6.156 6.156 0 0 1 44.5 24"></svg:path></svg:g>`,
})
export class ArcticonsThangsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

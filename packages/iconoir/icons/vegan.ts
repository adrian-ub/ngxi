import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirVeganIcon],svg[iconoir-vegan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15 11.063C12.53 13.65 10.059 20 10.059 20S6.529 11.063 3 9"></svg:path><svg:path d="m20.496 5.577l.426 4.424c.276 2.87-1.875 5.425-4.745 5.702c-2.816.27-5.367-1.788-5.638-4.604a5.12 5.12 0 0 1 4.608-5.59l4.716-.454a.58.58 0 0 1 .633.522"></svg:path></svg:g>`,
})
export class IconoirVeganIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

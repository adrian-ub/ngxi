import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneNuclearPlantIcon],svg[icon-park-twotone-nuclear-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTNuclearPlant0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 44h40M12 14h24"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M14 14h20l.877 7.017c.082.654.228 1.298.436 1.922l3.334 10.003a10 10 0 0 1 .464 2.167L40 44H8l.889-8.89a10 10 0 0 1 .464-2.168l3.334-10.003c.208-.624.354-1.268.436-1.922z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 8l.828-.828A4 4 0 0 1 27.657 6h.686a4 4 0 0 0 2.829-1.172L32 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M17 31a7.01 7.01 0 0 0 4.272 6.448M31 31a7.01 7.01 0 0 1-4.272 6.448M18.934 26.17A6.98 6.98 0 0 1 24 24a6.98 6.98 0 0 1 5.067 2.17"></svg:path><svg:circle cx="24" cy="31" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTNuclearPlant0)"></svg:path>`,
})
export class IconParkTwotoneNuclearPlantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

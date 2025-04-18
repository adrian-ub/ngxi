import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPaletteFill12Icon],svg[garden-palette-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.736 3.322C2.368.426 5.903-.812 8.634.56c1.646.827 2.307 2.72 1.536 4.297l-.089.168l-.58 1.029a.94.94 0 0 0-.104.651a1 1 0 0 0 .54.688c.079.047.18.078.294.103l.118.024l.435.072l.182.037c.513.119 1 .377 1.032 1.23q.005.127-.012.249c-.106.813-.877 1.41-1.66 1.82l-.167.084l-.276.13l-.263.112l-.247.098l-.422.154c-1.737.605-3.798.764-5.609-.146C.272 9.818-.895 6.22.736 3.322M7 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M3 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class GardenPaletteFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}

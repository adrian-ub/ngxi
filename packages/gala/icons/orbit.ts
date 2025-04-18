import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaOrbitIcon],svg[gala-orbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:circle cx="208" cy="48.004" r="32.004"></svg:circle><svg:path d="M 226.27213,74.276705 A 112.01361,112.01361 0 0 1 195.13671,217.67055 112.01361,112.01361 0 0 1 48.774885,207.20976 112.01361,112.01361 0 0 1 38.349122,60.84543 112.01361,112.01361 0 0 1 181.75042,29.744337"></svg:path><svg:path d="M 219.63599,191.62385 A 112.01361,112.01361 0 0 0 127.86254,144.01566 112.01361,112.01361 0 0 0 36.197622,191.83249"></svg:path></svg:g>`,
})
export class GalaOrbitIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

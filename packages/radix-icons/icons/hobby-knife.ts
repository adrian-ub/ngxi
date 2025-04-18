import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsHobbyKnifeIcon],svg[radix-icons-hobby-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.354 13.354a.5.5 0 0 1-.707 0l-5.25-5.25A.5.5 0 0 1 6.316 8H5a.5.5 0 0 1-.472-.336l-2.4-6.9A.5.5 0 0 1 2.936.23l5.4 4.9a.5.5 0 0 1 .164.37v.317a.5.5 0 0 1 .104.08l5.25 5.25a.5.5 0 0 1 0 .707zM8.25 6.957l-.793.793L12 12.293l.793-.793zM3.717 2.288L5.355 7h.938L7.5 5.793V5.72z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsHobbyKnifeIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

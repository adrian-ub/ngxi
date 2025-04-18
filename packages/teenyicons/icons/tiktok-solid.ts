import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTiktokSolidIcon],svg[teenyicons-tiktok-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 0h1v1a4 4 0 0 0 4 4v1a5 5 0 0 1-4-2v7a4 4 0 1 1-4-4v1a3 3 0 1 0 3 3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTiktokSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}

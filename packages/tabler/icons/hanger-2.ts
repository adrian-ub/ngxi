import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHanger2Icon],svg[tabler-hanger-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 9l-7.971 4.428A2 2 0 0 0 3 15.177V16a2 2 0 0 0 2 2h1"></svg:path><svg:path d="M18 18h1a2 2 0 0 0 2-2v-.823a2 2 0 0 0-1.029-1.749L12 9c-1.457-.81-1.993-2.333-2-4a2 2 0 1 1 4 0"></svg:path><svg:path d="M6 18a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class TablerHanger2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

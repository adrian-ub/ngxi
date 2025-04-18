import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPower03Icon],svg[hugeicons-wind-power-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 10.866a2 2 0 1 1-4.002.002A2 2 0 0 1 14 10.866"></svg:path><svg:path d="M13.99 10.684L20 14.368a3 3 0 0 1-4.098 1.099l-4.165-2.618m1.747-3.345V2.368c-1.657 0-2.967 1.344-2.967 3.002v4.134"></svg:path><svg:path d="M10.007 10.687L4 14.368a3 3 0 0 0 4.098 1.099l4.164-2.617m1.188 4.02l.32 2.022c.226 1.604.34 2.407.085 2.944s-.748.537-1.735.537h-.24c-.987 0-1.48 0-1.735-.537c-.254-.537-.141-1.34.085-2.944l.32-2.023"></svg:path></svg:g>`,
})
export class HugeiconsWindPower03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

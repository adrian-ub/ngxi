import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypstIcon],svg[catppuccin-typst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round" d="M8.343 11.167q0 .904.252 1.214t.915.31q.687 0 1.763-.715l.457.786Q9.716 14.5 8.412 14.5t-2.06-.643q-.754-.666-.754-2.333V5.286H4.453l-.183-.881l1.328-.429V2.81L8.343 1.5v2.619l2.7-.214l-.251 1.548l-2.449-.096z"></svg:path>`,
})
export class CatppuccinTypstIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

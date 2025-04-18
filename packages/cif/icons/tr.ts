import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifTrIcon],svg[cif-tr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E30A17" d="M.5.5h300v200H.5z"></svg:path><svg:circle cx="106.75" cy="100.5" r="50" fill="#FFF"></svg:circle><svg:circle cx="119.25" cy="100.5" r="40" fill="#E30A17"></svg:circle><svg:path fill="#FFF" d="m146.334 100.5l45.225 14.695l-27.951-38.472v47.553l27.951-38.471z"></svg:path></svg:g>`,
})
export class CifTrIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifLrIcon],svg[cif-lr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="cifLr0" x1="0%" x2="100%" y1="50%" y2="50%"><svg:stop offset="0%" stop-color="#FFF"></svg:stop><svg:stop offset="100%"></svg:stop></svg:lineargradient></svg:defs><svg:g fill="none"><svg:path fill="#BF0A30" d="M.5.552h300v157.895H.5z"></svg:path><svg:path fill="url(#cifLr0)" stroke="#FFF" stroke-width="13.158" d="M.5 22.084h300M.5 50.792h300M.5 79.5h300M.5 108.208h300M.5 136.916h300"></svg:path><svg:path fill="#002868" d="M.5.552h71.77v71.77H.5z"></svg:path><svg:path fill="#FFF" d="m15.908 29.784l12.656 9.195l-4.834 14.878l12.655-9.195l12.656 9.195l-4.834-14.878l12.656-9.195H41.219l-4.834-14.877l-4.834 14.877z"></svg:path></svg:g>`,
})
export class CifLrIcon {
  readonly viewBox = input("0 0 301 159")
  readonly width = input("1.9em")
  readonly height = input("1em")
}

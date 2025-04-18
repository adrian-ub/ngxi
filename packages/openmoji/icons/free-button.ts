import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFreeButtonIcon],svg[openmoji-free-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"><svg:path d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path stroke-linecap="round" d="M23.83 36.376h-3v3.5v-7h4m4.178 7v-7h2.67a1.743 1.743 0 0 1 1.743 1.743h0a1.743 1.743 0 0 1-1.744 1.744h-2.669m2.682 0l1.517 3.513m9.623-7h-4v7h4m-4-3.5h3m10-3.5h-4v7h4m-4-3.5h3"></svg:path></svg:g>`,
})
export class OpenmojiFreeButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

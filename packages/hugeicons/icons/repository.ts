import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRepositoryIcon],svg[hugeicons-repository-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 19.623c-.69-.195-1.232-.491-1.682-.941C3 17.364 3 15.242 3 11s0-6.364 1.318-7.682S7.758 2 12 2s6.364 0 7.682 1.318S21 6.758 21 11s0 6.364-1.318 7.682c-.45.45-.993.746-1.682.941"></svg:path><svg:path d="M12 20.193c-.414 0-.748.32-1.414.958c-.647.619-.97.929-1.242.831a.5.5 0 0 1-.096-.046C9 21.779 9 21.31 9 20.376v-3.125c0-1.532 0-2.299.44-2.775C9.878 14 10.585 14 12 14s2.121 0 2.56.476s.44 1.243.44 2.775v3.125c0 .935 0 1.403-.248 1.56a.5.5 0 0 1-.096.046c-.272.098-.595-.212-1.242-.831c-.666-.639-1-.958-1.414-.958M8 10h8M8 6h4"></svg:path></svg:g>`,
})
export class HugeiconsRepositoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

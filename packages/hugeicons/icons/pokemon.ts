import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPokemonIcon],svg[hugeicons-pokemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 21c4.418 0 8-1.79 8-4c0-.977-.84-1.532-1.052-2.411c-.12-.496.052-1.078.052-1.589a7 7 0 0 0-.751-3.158C20.126 8.212 22 5.606 22 3c-4.153 0-6.257 2.35-6.9 3.722a7.06 7.06 0 0 0-6.2 0C8.257 5.349 6.153 3 2 3c0 2.606 1.874 5.213 3.751 6.842A7 7 0 0 0 5 13c0 .511.172 1.093.053 1.589C4.84 15.468 4 16.023 4 17c0 2.21 3.582 4 8 4"></svg:path><svg:path d="M11 16c.793.66 1.206.674 2 0m-4-3.5h-.009m6.017 0h-.009m-9.891 1.523c1.254.402 3.085 2.709.677 4.915m13.107-4.895c-1.254.4-3.084 2.708-.677 4.914"></svg:path></svg:g>`,
})
export class HugeiconsPokemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSkiIcon],svg[hugeicons-ski-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.998 4.5A1.5 1.5 0 1 1 17 4.5a1.5 1.5 0 0 1 3 0m-7.521 3.32l1.075-.968a1.5 1.5 0 0 1 1.94-.057L17 8m-4.521-.18L15.3 9.7L17 8m-4.521-.18L6 3.5m6.5 9l-1.393-.929a1.5 1.5 0 0 1-.476-1.984M12.5 12.5l2.36 1.686a1 1 0 0 1 0 1.628L12.5 17.5m0-5l1-1M17 8l.5 3.167L21 13.5"></svg:path><svg:path d="m3 12l14 9l2.5-.5"></svg:path></svg:g>`,
})
export class HugeiconsSkiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

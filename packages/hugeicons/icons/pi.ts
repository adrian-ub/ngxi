import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPiIcon],svg[hugeicons-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 9.3c0-1.8 2.061-3.6 4.685-3.6h9.272C19.2 5.7 21 4.35 21 3"></svg:path><svg:path d="m16.502 6l-.895 12.314c-.09 1.451.903 2.686 2.158 2.686c.932 0 1.759-.69 2.053-1.715l.284-.985M10 6c-.133 3.063-.4 8.75-.8 10.5S8 20 6 20"></svg:path></svg:g>`,
})
export class HugeiconsPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLemonIcon],svg[tabler-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905-10.237 3.905-14.143 0z"></svg:path><svg:path d="M5.868 15.06a6.5 6.5 0 0 0 9.193-9.192m-4.597 4.596l4.597 4.597m-4.597-4.597v6.364m0-6.364h6.364"></svg:path></svg:g>`,
})
export class TablerLemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

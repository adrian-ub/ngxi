import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCh4x3Icon],svg[flag-ch-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="red" d="M0 0h640v480H0z"></svg:path><svg:g fill="#fff"><svg:path d="M170 195h300v90H170z"></svg:path><svg:path d="M275 90h90v300h-90z"></svg:path></svg:g></svg:g>`,
})
export class FlagCh4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

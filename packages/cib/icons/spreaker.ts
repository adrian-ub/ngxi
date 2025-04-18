import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibSpreakerIcon],svg[cib-spreaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.484 0l-7.516 8.719L.702 6.292L12.28 16.12L.895 26.073l11.214-2.646L19.791 32l.948-11.469l10.557-4.646l-10.62-4.438L19.494-.001z"></svg:path>`,
})
export class CibSpreakerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

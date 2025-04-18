import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCompositionIcon],svg[icon-park-outline-composition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="m39.828 21.786l-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182c-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m39.828 21.786l-17.86 17.86c-3.414 3.414-9.03 3.332-12.545-.182c-3.515-3.515-3.597-9.132-.182-12.546L27.1 9.058M8.734 27.424l26.144-.688"></svg:path><svg:path fill="currentColor" d="M29.393 20.907a2 2 0 1 0-2.828-2.829a2 2 0 0 0 2.828 2.829m-5.657 2.829a2 2 0 1 0-2.828-2.829a2 2 0 0 0 2.828 2.828"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m23.565 5.522l19.798 19.8"></svg:path></svg:g>`,
})
export class IconParkOutlineCompositionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

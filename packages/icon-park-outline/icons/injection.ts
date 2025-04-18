import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInjectionIcon],svg[icon-park-outline-injection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M38.168 22.262L19.077 41.354L6.349 28.626L25.44 9.534" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M38.168 22.262L19.077 41.354L6.349 28.626L25.44 9.534"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="m21.905 5.999l19.8 19.799m-26.871 2.828l4.243 4.243M6.35 41.353l6.363-6.363m19.092-19.092l3.534-3.535"></svg:path></svg:g>`,
})
export class IconParkOutlineInjectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

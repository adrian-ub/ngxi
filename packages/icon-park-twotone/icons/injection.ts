import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneInjectionIcon],svg[icon-park-twotone-injection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTInjection0"><svg:g fill="none"><svg:path fill="#555" fill-rule="evenodd" d="M38.168 22.262L19.077 41.354L6.349 28.626L25.44 9.534" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M38.168 22.262L19.077 41.354L6.349 28.626L25.44 9.534"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="m21.905 5.999l19.8 19.799m-26.871 2.828l4.243 4.243M6.35 41.353l6.363-6.363m19.092-19.092l3.534-3.535"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTInjection0)"></svg:path>`,
})
export class IconParkTwotoneInjectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

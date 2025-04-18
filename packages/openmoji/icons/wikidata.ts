import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWikidataIcon],svg[openmoji-wikidata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 20h3.027v32H8zm4.541 0h6.054v32h-6.054zm7.567 0h6.054v32h-6.054zm16.649 0h6.054v32h-6.054zm12.108 0h6.054v32h-6.054zm-21.189 0h3.027v32h-3.027zm4.54 0h3.027v32h-3.027zm12.108 0h3.027v32h-3.027zm12.108 0h3.027v32h-3.027zm4.541 0H64v32h-3.027z"></svg:path><svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#D22F27" d="M8 20h3.027v32H8zm4.541 0h6.054v32h-6.054zm7.567 0h6.054v32h-6.054z"></svg:path><svg:path fill="#61B2E4" d="M36.757 20h6.054v32h-6.054zm12.108 0h6.054v32h-6.054z"></svg:path><svg:path fill="#5C9E31" d="M27.676 20h3.027v32h-3.027zm4.54 0h3.027v32h-3.027z"></svg:path><svg:path fill="#61B2E4" d="M44.324 20h3.027v32h-3.027z"></svg:path><svg:path fill="#5C9E31" d="M56.432 20h3.027v32h-3.027zm4.541 0H64v32h-3.027z"></svg:path><svg:path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiWikidataIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

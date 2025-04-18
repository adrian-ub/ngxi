import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLineheightIcon],svg[whh-lineheight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.74 385h-640q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-192-192h-448q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5h448q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-585 704q9 8 9 19t-9 19l-65 82q-9 8-21.5 8t-21.5-8l-66-82q-9-8-9-19t9-19h56V129h-56q-9-8-9-19.5t9-18.5l66-83q9-8 21.5-8t21.5 8l65 83q9 7 9 18.5t-9 19.5h-54v768zm137-448h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-512q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5m0 192h576q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-576q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5m0 191h320q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-320q-26 0-44.5-18.5t-18.5-45t18.5-45.5t44.5-19"></svg:path>`,
})
export class WhhLineheightIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGloveIcon],svg[icon-park-twotone-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGlove0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M8 42h27.833v-8S41 20.582 42 18s-.5-5.335-4-5s-6.889 8.33-6.889 8.33S30.5 13 30 10.5S29 4 19.306 4S8 11.12 8 15z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGlove0)"></svg:path>`,
})
export class IconParkTwotoneGloveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

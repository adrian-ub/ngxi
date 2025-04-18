import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSnowmanIcon],svg[icon-park-twotone-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSnowman0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m12 24l-8-4m4 2v-4m32 4v-4"></svg:path><svg:circle cx="24" cy="10" r="6" fill="#555" stroke="#fff" stroke-width="4"></svg:circle><svg:ellipse cx="24" cy="30" fill="#555" stroke="#fff" stroke-width="4" rx="13" ry="14"></svg:ellipse><svg:circle cx="24" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="31" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="36" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m44 20l-8 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSnowman0)"></svg:path>`,
})
export class IconParkTwotoneSnowmanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

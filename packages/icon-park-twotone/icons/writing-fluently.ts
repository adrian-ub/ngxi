import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWritingFluentlyIcon],svg[icon-park-twotone-writing-fluently-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWritingFluently0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="M24 24v-5L39 4l5 5l-15 15z" clip-rule="evenodd"></svg:path><svg:path d="M16 24H9a5 5 0 0 0 0 10h30a5 5 0 0 1 0 10H18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWritingFluently0)"></svg:path>`,
})
export class IconParkTwotoneWritingFluentlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

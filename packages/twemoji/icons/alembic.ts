import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAlembicIcon],svg[twemoji-alembic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#67757F" d="M16 34.375a1 1 0 1 1-2 0V26a1 1 0 1 1 2 0z"></svg:path><svg:circle cx="15.41" cy="15.625" r="13.873" fill="#E1E8ED"></svg:circle><svg:path fill="#50A5E6" d="M3.592 16.139c.232 6.334 5.427 11.402 11.818 11.402s11.586-5.068 11.818-11.402z"></svg:path><svg:path fill="#67757F" d="M30 24a2 2 0 0 1-2 2H3a2 2 0 0 1 0-4h25a2 2 0 0 1 2 2"></svg:path><svg:path fill="#67757F" d="M2.622 35.207a.999.999 0 1 1-1.883-.673l3.317-9.262a1 1 0 1 1 1.883.673zm25.757 0a1 1 0 0 0 1.882-.673l-3.359-9.345a1 1 0 1 0-1.882.672z"></svg:path><svg:path fill="#E1E8ED" d="M19.006 2.266S32.36 6.948 33.778 7.404c3.725 1.199 2.184 5.224-.385 4.582c-5.083-1.271-14.387-4.068-15.415-4.068s1.028-5.652 1.028-5.652"></svg:path><svg:path fill="#9AAAB4" d="M29 23a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h25a1 1 0 0 1 1 1"></svg:path><svg:ellipse cx="15.41" cy="16.139" fill="#3B94D9" rx="11.818" ry="1.629"></svg:ellipse><svg:ellipse cx="34.047" cy="9.982" fill="#AAB8C2" rx="1.341" ry=".974" transform="rotate(-74.365 34.047 9.981)"></svg:ellipse>`,
})
export class TwemojiAlembicIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

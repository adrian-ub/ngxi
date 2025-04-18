import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStackLightIcon],svg[icon-park-stack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="30" x="17" y="4"></svg:rect><svg:path stroke-linecap="round" d="M17 14H31"></svg:path><svg:path stroke-linecap="round" d="M17 24H31"></svg:path><svg:path stroke-linecap="round" d="M6.87891 7.87891L11.1215 12.1215"></svg:path><svg:path stroke-linecap="round" d="M6.87891 33.1211L11.1215 28.8785"></svg:path><svg:path stroke-linecap="round" d="M41.1211 7.87891L36.8785 12.1215"></svg:path><svg:path stroke-linecap="round" d="M41.1211 33.1211L36.8785 28.8785"></svg:path><svg:path stroke-linecap="round" d="M4 21H10"></svg:path><svg:path stroke-linecap="round" d="M38 21H44"></svg:path><svg:rect width="8" height="10" x="20" y="34" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkStackLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

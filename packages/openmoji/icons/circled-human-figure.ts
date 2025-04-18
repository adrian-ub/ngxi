import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCircledHumanFigureIcon],svg[openmoji-circled-human-figure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="26.68" fill="#fff" fill-rule="evenodd"></svg:circle><svg:g stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="36" cy="36" r="26.68" fill="none" stroke-width="4.75"></svg:circle><svg:circle cx="36" cy="19.355" r="2" stroke-width="1.33"></svg:circle><svg:path stroke-width="1.33" d="M30.028 39.967H41.97l-.527-12.658c-.097-1.852-1.616-3.31-3.446-3.33h-3.973a3.514 3.514 0 0 0-3.47 3.33z"></svg:path><svg:path stroke-width="1.33" d="M32.694 27.976L31.43 53.29c-.037.733.383 1.333.932 1.333a1.38 1.38 0 0 0 1.152-1.324l1.692-14.676c.084-.729.452-1.324.818-1.324s.733.595.82 1.324L38.535 53.3a1.38 1.38 0 0 0 1.152 1.324c.55 0 .969-.6.932-1.333l-1.266-25.315z"></svg:path></svg:g>`,
})
export class OpenmojiCircledHumanFigureIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

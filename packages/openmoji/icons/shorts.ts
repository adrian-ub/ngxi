import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShortsIcon],svg[openmoji-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M36.621 42.671c-2.56 0-3.934.76-3.934 1.829s-2 6.413-2 6.413H16.625V18.958h40v31.955H42.563s-2-5.344-2-6.413s-1.374-1.829-3.934-1.829"></svg:path><svg:path fill="#3f3f3f" d="M17 18h39v6H17z"></svg:path><svg:path fill="#d0cfce" d="M34 29c2.004-1.282-.028-3.27 2-4m4 5c-1.682-1.682-.972-4.27-3-5"></svg:path><svg:circle cx="36.5" cy="25.5" r=".5" fill="#d0cfce"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M36.621 42.671c-2.56 0-3.934.76-3.934 1.829s-2 6.413-2 6.413H16.625V17.958h40v32.955H42.563s-2-5.344-2-6.413s-1.374-1.829-3.934-1.829Z"></svg:path><svg:path stroke-width="2" d="M27.044 26.328S26.659 34 18.956 39.795m27-13.467s.385 7.672 8.088 13.467M17 24h39"></svg:path><svg:path stroke-width="1.6" d="M34 29c2.004-1.282-.028-3.27 2-4m4 5c-1.682-1.682-.972-4.27-3-5"></svg:path><svg:circle cx="36.5" cy="25.5" r=".5" stroke-width="1.6"></svg:circle></svg:g>`,
})
export class OpenmojiShortsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

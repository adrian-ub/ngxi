import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FireEngineIcon],svg[emojione-v1-fire-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(0 2)"><svg:path fill="#b1203e" d="M23.627 29.83h14.14v15.521h-14.14z"></svg:path><svg:g fill="#ce2435"><svg:path d="M6.53 11h20.571v38.35H6.53zm24.168 4.323h31.961v34.02H30.698z"></svg:path><svg:path d="M0 18.03h14.14v31.31H0z"></svg:path></svg:g><svg:path fill="#e3e4e3" d="M18.679 49.563c-.133-4.04-3.37-7.273-7.35-7.273s-7.212 3.234-7.348 7.273z"></svg:path><svg:ellipse cx="11.329" cy="50" fill="#243438" rx="6.256" ry="6.4"></svg:ellipse><svg:ellipse cx="11.328" cy="49.915" fill="#969796" rx="4.055" ry="4.151"></svg:ellipse><svg:path fill="#e3e4e3" d="M58.13 49.48c-.134-4.04-3.365-7.275-7.348-7.275c-3.979 0-7.215 3.234-7.348 7.275z"></svg:path><svg:ellipse cx="50.789" cy="49.913" fill="#243438" rx="6.256" ry="6.401"></svg:ellipse><svg:ellipse cx="50.789" cy="49.826" fill="#969796" rx="4.056" ry="4.146"></svg:ellipse><svg:path fill="#fff" d="M0 36.919h62.66v2.918H0z"></svg:path><svg:path fill="#ce2034" d="M0 39.837h62.66v.906H0z"></svg:path><svg:path fill="#969796" d="M.932 20.388h10.397v9.634H.932z"></svg:path><svg:path fill="#b3b1b3" d="M.932 20.388h6.143v9.634H.932z"></svg:path><svg:path fill="#4d9dc9" d="M2.414 12.614h12.211v5.418H2.414z"></svg:path><svg:path fill="#79bbd9" d="M2.414 12.614h6.28v5.418h-6.28z"></svg:path><svg:path fill="#969796" d="M23.95 22.01h1.441v8.593H23.95zm5.868 0h1.441v8.593h-1.441zm5.342 0h1.44v8.593h-1.44zm5.03 0h1.441v8.593H40.19zm5.449 0h1.445v8.593h-1.445zm5.297 0h1.435v8.593h-1.435zm5.464 0h1.444v8.593H56.4z"></svg:path><svg:path fill="#cdcbca" d="M20.795 22.01h43.15v1.471h-43.15z"></svg:path><svg:path fill="gray" d="M20.795 29.13h43.15v1.473h-43.15z"></svg:path></svg:g>`,
})
export class EmojioneV1FireEngineIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMenorahIcon],svg[openmoji-menorah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v47.83H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="3" d="M36 50.15v-28.3m-5.19 28.41h10.38"></svg:path><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-width="2" d="M40.64 21.34a4.635 4.618 0 0 1-2.318 4a4.635 4.618 0 0 1-4.635 0a4.635 4.618 0 0 1-2.318-4"></svg:path><svg:path stroke-width="2" d="M44.87 21.34a8.871 8.858 0 0 1-4.435 7.671a8.871 8.858 0 0 1-8.871 0a8.871 8.858 0 0 1-4.435-7.671"></svg:path><svg:path stroke-width="2" d="M49.11 21.34a13.11 13.09 0 0 1-6.552 11.34a13.11 13.09 0 0 1-13.11 0a13.11 13.09 0 0 1-6.552-11.34"></svg:path><svg:path stroke-width="2" d="M53.34 21.34a17.34 17.34 0 0 1-8.67 15.02a17.34 17.34 0 0 1-17.34 0a17.34 17.34 0 0 1-8.67-15.02"></svg:path></svg:g>`,
})
export class OpenmojiMenorahIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

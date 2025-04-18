import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiYoYoIcon],svg[openmoji-yo-yo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8967aa" d="M18.917 32.873a13.33 13.33 0 1 1 17.706 19.259"></svg:path><svg:circle cx="24.328" cy="45.662" r="13.328" fill="#b399c8"></svg:circle><svg:path fill="#fcea2b" d="m24.969 54.8l-3.234-4.978l-5.934-.157l3.734-4.614l-1.684-5.692l5.542 2.126l4.893-3.361l-.309 5.928l4.708 3.615l-5.733 1.538z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="m24.969 54.8l-3.234-4.978l-5.934-.157l3.734-4.614l-1.684-5.692l5.542 2.126l4.893-3.361l-.309 5.928l4.708 3.615l-5.733 1.538z"></svg:path><svg:circle cx="24.328" cy="45.662" r="13.328" stroke-width="2"></svg:circle><svg:path stroke-width="2" d="M18.917 32.873a13.33 13.33 0 1 1 17.706 19.259"></svg:path><svg:path stroke-width="2" d="M53.594 12.795c1.276 3.06 5.58 2.747 5.58 2.747a3.18 3.18 0 0 0 3.502-3.104a4.17 4.17 0 0 0-4.413-1.911s-10.068.39-12.281 13.441c-1.513 8.919-4.51 9.777-8.863 9.316c-1.62-.171-2.912-.994-5.784-2.265a10 10 0 0 0-2.54-.724s-3.395-.297-4.467.457"></svg:path><svg:path stroke-width=".5" d="M16.57 35.01a13.33 13.33 0 1 1 17.706 19.26"></svg:path><svg:path stroke-width=".5" d="M15.801 35.541A13.33 13.33 0 1 1 33.507 54.8"></svg:path><svg:path stroke-width=".5" d="M15.007 36.335a13.33 13.33 0 1 1 17.707 19.258"></svg:path></svg:g>`,
})
export class OpenmojiYoYoIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

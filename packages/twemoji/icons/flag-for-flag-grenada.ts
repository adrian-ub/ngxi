import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagForFlagGrenadaIcon],svg[twemoji-flag-for-flag-grenada-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CE1126" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"></svg:path><svg:path fill="#007A5E" d="M3.5 8.5h29v19h-29z"></svg:path><svg:path fill="#FCD116" d="M3.5 8.5h29l-29 19h29l-29-19z"></svg:path><svg:circle fill="#CE1126" cx="18" cy="18" r="3.5"></svg:circle><svg:path d="M18 14.798l.719 2.213h2.326l-1.882 1.367l.719 2.212L18 19.223l-1.882 1.367l.719-2.212l-1.882-1.367h2.326zm0-9.616l.386 1.188h1.249l-1.01.734l.386 1.188L18 7.558l-1.011.734l.386-1.188l-1.01-.734h1.249zm8.02 0l.386 1.188h1.249l-1.01.734l.386 1.188l-1.011-.734l-1.01.734l.386-1.188l-1.011-.734h1.249zm-16.04 0l.386 1.188h1.249l-1.011.734l.386 1.188l-1.01-.734l-1.011.734l.386-1.188l-1.01-.734h1.249zm8.02 22.5l.386 1.188h1.249l-1.01.734l.386 1.188L18 30.058l-1.011.734l.386-1.188l-1.01-.734h1.249zm8.02 0l.386 1.188h1.249l-1.01.734l.386 1.188l-1.011-.734l-1.01.734l.386-1.188l-1.011-.734h1.249zm-16.04 0l.386 1.188h1.249l-1.011.734l.386 1.188l-1.01-.734l-1.011.734l.386-1.188l-1.01-.734h1.249z" fill="#FCD116"></svg:path><svg:path fill="#CE1126" d="M6.118 19.067c.304.315.645.579.962.712a4.336 4.336 0 0 0-.164-1.148c-.268-.251-.572-.464-.868-.577c-.043.318-.012.673.07 1.013z"></svg:path><svg:path fill="#FCD116" d="M7.643 19.563c.803-2.916-2.06-2.738-2.803-3.67c.512 1.068-1.329 3.617 1.739 4.214a2.99 2.99 0 0 1-.46-1.04a2.812 2.812 0 0 1-.07-1.013c.297.113.6.326.868.577c.313.293.578.637.726.932z"></svg:path>`,
})
export class TwemojiFlagForFlagGrenadaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

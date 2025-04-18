import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCastileAndLeonFlagIcon],svg[openmoji-castile-and-leon-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h31v19H5zm31 19h31v19H36z"></svg:path><svg:g fill="none" stroke-linecap="round"><svg:path stroke="#8967aa" stroke-width="3" d="M21.42 40.598c-.988 2.289-1.551 3.658.265 6.334"></svg:path><svg:path stroke="#8967aa" stroke-width="2" d="M21.68 46.928c-.526 1.376.227 1.711 1.5 2.744c.365.296.87 1.73.87 1.73m-5.78-.734c-.527-1.376.227-1.711 1.5-2.744c.365-.296.87-1.73.87-1.73"></svg:path><svg:path stroke="#8967aa" stroke-linejoin="round" stroke-width="2" d="m17.42 46.768l2.712-2.184l-3.212-3.438"></svg:path><svg:path stroke="#fcea2b" d="M21.14 39.098c1.044.057 1.642.577 1.862 1.488"></svg:path><svg:path stroke="#8967aa" stroke-linejoin="round" d="M22.61 47.158c2.54-.128 2.137-2.487 1.359-4.712"></svg:path></svg:g><svg:g fill="none" stroke-linecap="round"><svg:path stroke="#8967aa" stroke-width="3" d="M52.11 22.3c-.988 2.289-1.551 3.658.265 6.334"></svg:path><svg:path stroke="#8967aa" stroke-width="2" d="M52.37 28.63c-.526 1.376.227 1.711 1.5 2.744c.365.296.87 1.73.87 1.73m-5.78-.734c-.527-1.376.227-1.711 1.5-2.744c.365-.296.87-1.73.87-1.73"></svg:path><svg:path stroke="#8967aa" stroke-linejoin="round" stroke-width="2" d="m48.11 28.47l2.712-2.184l-3.212-3.438"></svg:path><svg:path stroke="#fcea2b" d="M51.83 20.8c1.044.057 1.642.577 1.862 1.488"></svg:path><svg:path stroke="#8967aa" stroke-linejoin="round" d="M53.3 28.86c2.54-.128 2.137-2.487 1.359-4.712"></svg:path></svg:g><svg:path fill="#fcea2b" d="m17 33.996l-1.538-1.009v-1.582l.733-.597l.016-4.917l-.274-.45v-1.23l.854-.516v-3.04h1.622l.065 2.69l.776.004l-.089-2.569l-.29-.25l-.024-1.05l.483-.46l2.367-.016l.467.42v1.13l-.265.242v2.55h.62v-2.6h1.763v2.959l.845.49l-.016 1.226l-.287.455l-.003 4.874l.765.654l.008 1.574l-1.554 1.009z"></svg:path><svg:path fill="#1e50a0" d="m19.8 33.976l1.441.006V31.5c-.182-.327-1.154-.528-1.429.024zm.4-11.24l.643.001l-.002-1.655c-.182-.327-.375-.55-.65 0zm1.5 5.66l.643.001l-.002-1.655c-.182-.327-.375-.55-.65 0zm-3.1.01l.643.001l-.002-1.655c-.182-.327-.375-.55-.65 0z"></svg:path><svg:path fill="#fcea2b" d="m48 53l-1.538-1.009v-1.582l.733-.597l.016-4.917l-.274-.45v-1.23l.854-.516v-3.04h1.622l.065 2.69l.776.004l-.089-2.569l-.29-.25l-.024-1.05l.483-.46l2.367-.016l.467.42v1.13l-.265.242v2.55h.62v-2.6h1.763v2.959l.845.49l-.016 1.226l-.287.455l-.003 4.874l.765.654l.008 1.574l-1.554 1.009z"></svg:path><svg:path fill="#1e50a0" d="m50.8 52.98l1.441.006v-2.482c-.182-.327-1.154-.528-1.429.024zm.4-11.24l.643.001l-.002-1.655c-.182-.327-.375-.55-.65 0zm1.5 5.66l.643.001l-.002-1.655c-.182-.327-.375-.55-.65 0zm-3.1.01l.643.001l-.002-1.655c-.182-.327-.375-.55-.65 0z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiCastileAndLeonFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}

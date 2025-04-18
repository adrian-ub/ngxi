import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDeployhqIconIcon],svg[logos-deployhq-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4B25BB" d="M64 255.642v-63.905L0 255.642zm127.999-.001h-64V63.924h64z"></svg:path><svg:path d="M192 319.529H64l64-63.907zM64 95.858c0 17.648 14.326 31.953 32 31.953c17.673 0 32-14.305 32-31.953c0-17.647-14.327-31.952-32-31.952S64 78.21 64 95.858"></svg:path><svg:path fill="#40CF9F" d="M192 255.642h64l-64-63.905zM128 0l64 63.905H64zm0 255.644H64.001V127.832H128z"></svg:path>`,
})
export class LogosDeployhqIconIcon {
  readonly viewBox = input("0 0 256 320")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

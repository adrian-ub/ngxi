import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFontDownloadOffOutlineIcon],svg[material-symbols-light-font-download-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.11 22.53l-1.589-1.588q-.077.039-.154.049q-.076.009-.173.009H4.616q-.672 0-1.144-.472T3 19.385V4.805q0-.095.01-.172t.048-.154L1.887 3.308l.713-.714l19.223 19.223zM4.616 20h13.963L4 5.421v13.964q0 .23.192.423t.423.192M21 18.183l-1-1V4.616q0-.231-.192-.424T19.385 4H6.817l-1-1h13.568q.67 0 1.143.472q.472.472.472 1.144zm-6.611-6.612l-1.57-1.569l-.769-2.175h-.1l-.34.965l-.716-.715l.672-1.885h.869zm1.111 6.006l-1.136-3.22l1.62 1.622l.578 1.598zm-8.062 0l2.7-7.444l.728.727l-.974 2.763h3.737l.942.943h-5.01L8.5 17.577z"></svg:path>`,
})
export class MaterialSymbolsLightFontDownloadOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

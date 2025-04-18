import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalStreamlitIcon],svg[devicon-original-streamlit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff4b4b" d="m63.993 72.521l-22.44-11.86l-38.95-20.587c-.035-.035-.106-.035-.142-.035c-1.422-.676-2.88.746-2.346 2.168l19.846 50.62l.004.01l.06.15c.814 1.888 2.592 3.054 4.526 3.513c.164.036.28.067.477.107c.196.043.47.103.704.12c.039.004.074.004.114.007h.028c.028.004.057.004.085.008H26c.024.003.053.003.078.003h.046a.555.555 0 0 0 .085.004a348.89 348.89 0 0 0 75.629 0a8.967 8.967 0 0 0 1.152-.074c.01-.005.025-.005.035-.008c.06-.008.121-.018.182-.028a3.5 3.5 0 0 0 .266-.047c.178-.039.259-.067.5-.15a9.57 9.57 0 0 0 .893-.349c.25-.12.424-.237.634-.368c.26-.164.506-.331.757-.519c.108-.083.182-.135.26-.21l-.043-.025z"></svg:path><svg:path fill="#7d353b" d="M125.446 40.075h-.035L86.446 60.66l21.66 32.259l19.797-50.712v-.071c.498-1.494-1.031-2.845-2.457-2.062"></svg:path><svg:path fill="#bd4043" d="M66.07 30.286c-.997-1.454-3.165-1.454-4.125 0L41.554 60.661l22.439 11.86l42.523 22.474c.267-.261.481-.516.708-.785c.32-.395.618-.817.881-1.29l-21.66-32.26Z"></svg:path>`,
})
export class DeviconOriginalStreamlitIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}

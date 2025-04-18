import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDetectorAlarmIcon],svg[material-symbols-light-detector-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20v-4h1v4zm7.575-2.948l-2.838-2.813l.713-.714l2.814 2.839zm-14.15 0l-.689-.688l2.814-2.839l.714.714zm2.598-9.283l.493 1.365q.076.193.23.299t.346.105h6.816q.192 0 .346-.105q.154-.106.23-.299l.493-1.365zm1.07 2.77q-.516 0-.935-.292q-.42-.291-.6-.782L6.462 7.77h-.846q-.672 0-1.144-.472T4 6.154V4h16v2.154q0 .671-.472 1.143t-1.144.472h-.846l-.669 1.72q-.186.459-.59.754t-.914.295z"></svg:path>`,
})
export class MaterialSymbolsLightDetectorAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

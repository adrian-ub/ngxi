import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackWsIcon],svg[flagpack-ws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C51918" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackWs0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackWs0)"><svg:path fill="#2E42A5" d="M0 0v14h16V0z"></svg:path><svg:path fill="#FEFFFF" d="m3.566 7.772l-1.06.64l.241-1.249l-.882-.934l1.195-.051l.506-1.166l.505 1.166h1.194l-.881.985l.265 1.249zm8 0l-1.06.64l.241-1.249l-.882-.934l1.195-.051l.506-1.166l.505 1.166h1.194l-.881.985l.265 1.249zm-4.1-3.634l-.998.602l.227-1.175l-.83-.88l1.125-.047l.476-1.098l.476 1.098h1.123l-.83.927l.25 1.175zm1.08 4.287l-.623.377l.142-.735l-.52-.55l.704-.03l.297-.685l.298.686h.702l-.518.58l.156.734zm-1.137 4.403l-1.497.904l.342-1.763l-1.247-1.32l1.688-.071l.714-1.646l.714 1.646h1.684l-1.243 1.39l.374 1.764z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackWsIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

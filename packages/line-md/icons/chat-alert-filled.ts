import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdChatAlertFilledIcon],svg[line-md-chat-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatAlertFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="4" stroke-dashoffset="4" d="M12 7v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M12 13v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatAlertFilled0)"></svg:rect>`,
})
export class LineMdChatAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

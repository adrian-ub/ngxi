import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAutoReadPauseRoundedIcon],svg[material-symbols-light-auto-read-pause-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.308 13.5q.213 0 .357-.144t.143-.356V7q0-.213-.144-.356t-.357-.144t-.356.144T9.808 7v6q0 .213.144.356q.144.144.356.144m3.385 0q.213 0 .356-.144t.143-.356V7q0-.213-.144-.356q-.144-.144-.356-.144q-.213 0-.357.144T13.192 7v6q0 .213.144.356t.357.144M6.077 17l-1.704 1.704q-.379.379-.876.171T3 18.133V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17z"></svg:path>`,
})
export class MaterialSymbolsLightAutoReadPauseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

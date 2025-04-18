import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePoolLadderSolidIcon],svg[streamline-pool-ladder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.605 1.524A1.166 1.166 0 0 0 3.44 2.69a.75.75 0 0 1-1.5 0a2.666 2.666 0 1 1 5.331 0v1.165h3.29V2.69a1.166 1.166 0 0 0-1.166-1.166a.75.75 0 0 1 0-1.5A2.666 2.666 0 0 1 12.06 2.69v6.002a.75.75 0 0 1-1.5 0V8.23H7.271v.591a.75.75 0 0 1-1.5 0V2.69a1.166 1.166 0 0 0-1.166-1.166m2.666 5.205h3.29V5.355H7.27V6.73Zm-5.274 4.102a.5.5 0 0 1 .463.303c.164.384.446.707.805.922c.69.414 1.78.414 2.47 0a2 2 0 0 0 .805-.922a.5.5 0 0 1 .92 0c.164.384.446.707.805.922c.69.414 1.78.414 2.47 0a2 2 0 0 0 .805-.922a.5.5 0 0 1 .922.005a1.85 1.85 0 0 0 1.18 1.063a.5.5 0 0 1 .358.479v.819a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-.82a.5.5 0 0 1 .357-.479a1.85 1.85 0 0 0 1.181-1.062a.5.5 0 0 1 .46-.308Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePoolLadderSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

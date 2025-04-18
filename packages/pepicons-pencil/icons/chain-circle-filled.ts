import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilChainCircleFilledIcon],svg[pepicons-pencil-chain-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilChainCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.346 14.902a3 3 0 0 1-.879-4.15l2.18-3.354a3 3 0 1 1 5.03 3.272l-2.18 3.353a3 3 0 0 1-4.15.88m-1.31.193a4 4 0 0 1-.407-4.889l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.3.527"></svg:path><svg:path d="M8.398 18.842a3 3 0 0 1-.879-4.151l2.18-3.353a3 3 0 1 1 5.03 3.271l-2.18 3.353a3 3 0 0 1-4.15.88m-1.31.193a4 4 0 0 1-.407-4.89l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.3.528"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilChainCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilChainCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}

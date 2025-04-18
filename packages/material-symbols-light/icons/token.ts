import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTokenIcon],svg[material-symbols-light-token-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.196 9.866L4.031 7.002L12 2.577l7.97 4.425l-5.166 2.864q-.518-.639-1.248-1.002T12 8.5t-1.556.364t-1.248 1.001M11.5 21.143l-8-4.43V7.837l5.221 2.932q-.113.308-.167.603T8.5 12q0 1.298.854 2.277t2.146 1.214zM12 14.5q-1.056 0-1.778-.722T9.5 12t.722-1.778T12 9.5t1.778.722T14.5 12t-.722 1.778T12 14.5m.5 6.642v-5.651q1.292-.235 2.146-1.214T15.5 12q0-.333-.054-.628t-.167-.603L20.5 7.837v8.875z"></svg:path>`,
})
export class MaterialSymbolsLightTokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

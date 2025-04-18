import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlipIcon],svg[zmdi-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 432v-43h43v43zm85-256v-43h43v43zM0 91q0-18 12.5-30.5T43 48h85v43H43v298h85v43H43q-18 0-30.5-12.5T0 389zm341-43q18 0 30.5 12.5T384 91h-43zM171 475V5h42v470zm170-128v-43h43v43zM256 91V48h43v43zm85 170v-42h43v42zm0 171v-43h43q0 18-12.5 30.5T341 432"></svg:path>`,
})
export class ZmdiFlipIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

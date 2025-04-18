import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiIridescentIcon],svg[zmdi-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 301V173h299v128zM159 4h43v63h-43zm171 53l31 30l-39 38l-30-30zM202 471h-43v-63h43zm159-83l-31 30l-38-39l30-30zM0 87l30-30l38 38l-30 30zm30 331L0 387l38-38l30 30z"></svg:path>`,
})
export class ZmdiIridescentIcon {
  readonly viewBox = input("0 0 368 472")
  readonly width = input("0.78em")
  readonly height = input("1em")
}

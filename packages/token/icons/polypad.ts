import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPolypadIcon],svg[token-polypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.941 16.495v-9L12.001 3L4.058 7.495v9l2.647 1.487V8.998L12 5.981l5.294 3.017v6.004L12 18.009V21z"></svg:path><svg:path fill="currentColor" d="M15.706 9.92L12 7.84L8.294 9.92v9l2.117 1.143V11.08L12 10.153l1.588.926v1.843L12 13.848v2.303l3.706-2.07z"></svg:path><svg:path fill="currentColor" d="M19.941 7.495L12.001 3L4.058 7.495l2.637 1.503L12 5.981l5.305 3.017z"></svg:path><svg:path fill="currentColor" d="M12 7.84L8.326 9.92l2.044 1.16l1.63-.932l1.63.926l2.076-1.154z"></svg:path>`,
})
export class TokenPolypadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

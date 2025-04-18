import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlareIcon],svg[zmdi-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 219v42H0v-42zm46-69l-30 30l-45-46l30-30zM256 5v128h-43V5zm114 129l-45 46l-30-30l45-46zm-29 85h128v42H341zm-106.5-43q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45.5 18.5t-45-18.5T171 240t18.5-45.5t45-18.5M295 330l30-30l45 46l-30 30zM99 346l45-46l30 30l-45 46zm114 129V347h43v128z"></svg:path>`,
})
export class ZmdiFlareIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

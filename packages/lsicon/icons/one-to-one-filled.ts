import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOneToOneFilledIcon],svg[lsicon-one-to-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5H4v1H2v2H1zM12 3h2.5a.5.5 0 0 1 .5.5V6h-1V4h-2zM6.236 5.06a.5.5 0 0 1 .264.44V11h-1V6.434l-.723.482l-.554-.832l1.5-1a.5.5 0 0 1 .513-.025m5 0a.5.5 0 0 1 .264.44V11h-1V6.434l-.723.482l-.554-.832l1.5-1a.5.5 0 0 1 .513-.025M7.5 7V6h1v1zm0 3V9h1v1zM2 12v-2H1v2.5a.5.5 0 0 0 .5.5H4v-1zm13-2v2.5a.5.5 0 0 1-.5.5H12v-1h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOneToOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

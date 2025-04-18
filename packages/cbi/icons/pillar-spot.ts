import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPillarSpotIcon],svg[cbi-pillar-spot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.059 2 6.706 3.765 6.706 5.824v12.352C6.706 20.235 9.059 22 12 22s5.294-1.765 5.294-3.824V5.824C17.294 3.765 15.235 2 12 2m0 17.059a6.15 6.15 0 0 1-4.412-1.765A5.31 5.31 0 0 1 12 15.235A5.64 5.64 0 0 1 16.412 17c-.588 1.176-2.059 2.059-4.412 2.059"></svg:path>`,
})
export class CbiPillarSpotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

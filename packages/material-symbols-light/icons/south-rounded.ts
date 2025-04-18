import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSouthRoundedIcon],svg[material-symbols-light-south-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.671q-.161 0-.298-.053q-.136-.052-.267-.183l-5.427-5.427q-.14-.14-.14-.344q0-.205.14-.345q.146-.146.337-.153t.332.134l4.823 4.817V3.481q0-.214.143-.357T12 2.981t.357.143t.143.357v15.617l4.798-4.798q.146-.146.357-.156q.21-.01.356.156q.141.146.141.347t-.14.342l-5.446 5.445q-.132.131-.268.184t-.298.053"></svg:path>`,
})
export class MaterialSymbolsLightSouthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

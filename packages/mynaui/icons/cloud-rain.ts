import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCloudRainIcon],svg[mynaui-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.004 19L12 14m4.004 7L16 16m-7.996 1L8 12m11.825 5c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662"></svg:path>`,
})
export class MynauiCloudRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

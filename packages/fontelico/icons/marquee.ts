import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontelicoMarqueeIcon],svg[fontelico-marquee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v142.844h142.844V0zm285.719 0v142.844h142.844V0zm285.719 0v142.844h142.844V0zm285.719 0v142.844h142.844V0zM.001 285.719v142.844h142.844V285.719zm857.156 0v142.844h142.844V285.719zM.001 571.438v142.844h142.844V571.438zm857.156 0v142.844h142.844V571.438zM.001 857.157v142.844h142.844V857.157zm285.719 0v142.844h142.844V857.157zm285.719 0v142.844h142.844V857.157zm285.719 0v142.844h142.844V857.157z"></svg:path>`,
})
export class FontelicoMarqueeIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}

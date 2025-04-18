import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMotorizedWheelchairIcon],svg[fluent-emoji-flat-motorized-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" d="M21.232 11.045a1 1 0 1 0-1.664 1.11l3.045 4.068a1 1 0 0 0 1.664-1.11zM18 18h-2v3h2zm8 0h-1.99v3H26z"></svg:path><svg:path fill="#F92F60" d="M19.42 6.66v.01h-.01z"></svg:path><svg:path fill="#533566" d="M20.779 13h-5.557A1.22 1.22 0 0 1 14 11.776v-.552c0-.682.55-1.224 1.222-1.224h5.557c.68 0 1.221.552 1.221 1.224v.552c0 .672-.55 1.224-1.221 1.224"></svg:path><svg:path fill="#433B6B" d="M25 17.99a.99.99 0 1 0 0-1.98a.99.99 0 0 0 0 1.98"></svg:path><svg:path fill="#5092FF" d="M26 2c-1.11 0-2 .95-2 2.5c0 .58.15 1.06.5 1.5c-.63.9-1.28 3.06-1.5 7v2h-8.9c-.61 0-1.11.5-1.11 1.11v1.79c0 .61.5 1.11 1.11 1.11h11.49c.8 0 1.47-.6 1.56-1.39L29 3c0-.5-.45-.99-1-.99h-2z"></svg:path><svg:path fill="#321B41" d="M16.59 20h.1v.01h10.05c.69 0 1.25.56 1.25 1.25v4.49c0 .69-.56 1.25-1.25 1.25h-1.077a3.5 3.5 0 0 1-6.326 0H12.31c-.72 0-1.31-.59-1.31-1.31v-.1C11 22.5 13.5 20 16.59 20"></svg:path><svg:path fill="#533566" d="M6.5 30a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path fill="#D3D3D3" d="M22.5 30a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m0-2a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M8 27.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill="#9B9B9B" d="M13.98 25.363a.5.5 0 0 1-.343.618l-7 2a.5.5 0 0 1-.274-.962l7-2a.5.5 0 0 1 .618.344"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMotorizedWheelchairIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

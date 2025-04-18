import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRollAltLightLightIcon],svg[lets-icons-roll-alt-light-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M4 15.5c.424 0 .685-.332.82-.56c.154-.262.276-.607.372-.99c.194-.774.308-1.817.308-2.95s-.114-2.176-.308-2.95c-.096-.383-.218-.728-.372-.99c-.135-.228-.396-.56-.82-.56s-.685.332-.82.56c-.154.262-.276.607-.372.99C2.614 8.824 2.5 9.867 2.5 11s.114 2.176.308 2.95c.096.383.218.728.372.99c.135.228.396.56.82.56Z"></svg:path><svg:path stroke-linecap="round" d="M20 15.5c.413 0 .672-.317.81-.546c.158-.26.283-.607.382-1.004c.2-.802.308-1.862.308-2.95s-.108-2.148-.308-2.95c-.1-.397-.224-.744-.381-1.004c-.139-.23-.398-.546-.811-.546m0 0s-3.5 1-8 1s-8-1-8-1m0 9s2.504-.716 6-.936m10 .936s-2.504-.716-6-.936M10.5 7.5V11m3-3.5V11"></svg:path><svg:circle cx="12" cy="13" r="2.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 14.5l-2.5 2L9 17l1 1.5l2-3l2 3l1-1.5l1.5-.5l-2.5-2"></svg:path></svg:g>`,
})
export class LetsIconsRollAltLightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

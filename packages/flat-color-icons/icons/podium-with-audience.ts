import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPodiumWithAudienceIcon],svg[flat-color-icons-podium-with-audience-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B0BEC5" d="M41 12H7l-1 4l5 3l-2-3h30l-2 3l5-3z"></svg:path><svg:path fill="#78909C" d="M9 16h30l-4 12H13z"></svg:path><svg:circle cx="24" cy="28" r="4" fill="#FFB74D"></svg:circle><svg:circle cx="36" cy="28" r="4" fill="#FFB74D"></svg:circle><svg:circle cx="12" cy="28" r="4" fill="#FFB74D"></svg:circle><svg:circle cx="18" cy="37" r="5" fill="#FFB74D"></svg:circle><svg:circle cx="30" cy="37" r="5" fill="#FFB74D"></svg:circle>`,
})
export class FlatColorIconsPodiumWithAudienceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

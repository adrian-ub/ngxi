import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityHostOutlineBadgedIcon],svg[clarity-host-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 25.78a3 3 0 1 0 3-3a3 3 0 0 0-3 3m4.5 0a1.5 1.5 0 1 1-1.5-1.5a1.5 1.5 0 0 1 1.5 1.5M12 11.8h12v-1.31c-.07-.1-.15-.19-.21-.29H12Zm0-5.6v1.6h10.73a7 7 0 0 1-.22-1.6Z"></svg:path><svg:path fill="currentColor" d="M26 32H10V4h12.78a7.7 7.7 0 0 1 .88-2H9.5A1.5 1.5 0 0 0 8 3.5V34h20V13.22a7.7 7.7 0 0 1-2-.88Z"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class ClarityHostOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}

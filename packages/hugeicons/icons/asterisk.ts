import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAsteriskIcon],svg[hugeicons-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 7.5v9m3.897-6.75l-7.794 4.5m7.794 0l-7.794-4.5M6.479 6.77c-4.27 4.044-5.258 9.664-2.209 12.553c2.606 2.469 7.318 2.144 11.298-.527L20 20.5l-1.916-3.831c3.788-3.989 4.556-9.235 1.646-11.992c-3.05-2.889-8.982-1.952-13.251 2.092" color="currentColor"></svg:path>`,
})
export class HugeiconsAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

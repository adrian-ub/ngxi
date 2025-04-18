import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPlayIcon],svg[foundation-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76.982 50c0-.847-.474-1.575-1.167-1.957L26.541 19.595a2.23 2.23 0 0 0-1.279-.404a2.244 2.244 0 0 0-2.244 2.243c0 .087.016.169.026.253h-.026v57.131h.026a2.235 2.235 0 0 0 2.218 1.99a2.2 2.2 0 0 0 1.117-.308l.02.035L75.875 51.97l-.02-.035A2.23 2.23 0 0 0 76.982 50"></svg:path>`,
})
export class FoundationPlayIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}

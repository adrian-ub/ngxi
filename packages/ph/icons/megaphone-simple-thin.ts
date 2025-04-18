import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleThinIcon],svg[ph-megaphone-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.41 90.5l-176-54A12 12 0 0 0 36 48v144a12 12 0 0 0 12 12a12.4 12.4 0 0 0 3.45-.5L140 176.32V192a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32.86l31.39-9.63A12.06 12.06 0 0 0 236 138v-36a12 12 0 0 0-8.59-11.5M49.12 195.84A4 4 0 0 1 44 192V48a4 4 0 0 1 1.6-3.2A4 4 0 0 1 48 44a4 4 0 0 1 1.07.15L140 72.05V168ZM188 192a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-18.13l40-12.27Zm40-54a4 4 0 0 1-2.88 3.84h-.05L148 165.5v-91l77.12 23.66A4 4 0 0 1 228 102Z"></svg:path>`,
})
export class PhMegaphoneSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

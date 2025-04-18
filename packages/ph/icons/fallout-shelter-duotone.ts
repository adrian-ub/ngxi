import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFalloutShelterDuotoneIcon],svg[ph-fallout-shelter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 32a96 96 0 1 0 96 96a96 96 0 0 0-96-96m32 144l-32-48l-32 48l-32-48h64L96 80h64l-32 48h64Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m71.05-91.77A8 8 0 0 0 192 120h-49l23.71-35.56A8 8 0 0 0 160 72H96a8 8 0 0 0-6.66 12.44L113.05 120H64a8 8 0 0 0-6.66 12.44l32 48a8 8 0 0 0 13.32 0l25.34-38l25.34 38a8 8 0 0 0 13.32 0l32-48a8 8 0 0 0 .39-8.21m-54-36.23L128 113.58L111 88ZM96 161.58L79 136h34.1Zm64 0L143 136h34.1Z"></svg:path></svg:g>`,
})
export class PhFalloutShelterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

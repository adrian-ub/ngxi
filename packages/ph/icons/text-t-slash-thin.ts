import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextTSlashThinIcon],svg[ph-text-t-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.69 219a4 4 0 0 1-5.65-.27l-73-80.34V196h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28v-66.45L60.78 60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 2-3.45l-9-9.86a4 4 0 0 1 6-5.38l160 176a4 4 0 0 1-.31 5.69M105.79 60H124v20.43a4 4 0 0 0 8 0V60h64v28a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4h-94.21a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhTextTSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

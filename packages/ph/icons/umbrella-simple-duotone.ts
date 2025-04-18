import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUmbrellaSimpleDuotoneIcon],svg[ph-umbrella-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 136H32a8 8 0 0 1-8-8.71a104.37 104.37 0 0 1 207.94 0A8 8 0 0 1 224 136" opacity=".2"></svg:path><svg:path d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0a8 8 0 0 0-16 0a16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37M32 128a96.43 96.43 0 0 1 161.4-62.48A95.32 95.32 0 0 1 224 128Z"></svg:path></svg:g>`,
})
export class PhUmbrellaSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

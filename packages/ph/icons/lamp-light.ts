import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampLightIcon],svg[ph-lamp-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.51 149.64l-48-112A6 6 0 0 0 192 34H64a6 6 0 0 0-5.51 3.64l-48 112A6 6 0 0 0 16 158h106v52H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-52h60v34a6 6 0 0 0 12 0v-34h34a6 6 0 0 0 5.51-8.36M25.1 146L68 46h120l42.9 100Z"></svg:path>`,
})
export class PhLampLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

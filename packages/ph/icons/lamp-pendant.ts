import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLampPendantIcon],svg[ph-lamp-pendant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 74.78V72a16 16 0 0 0-16-16h-24V16a8 8 0 0 0-16 0v40H96a16 16 0 0 0-16 16v2.78A111.73 111.73 0 0 0 16 176a8 8 0 0 0 8 8h64a40 40 0 0 0 80 0h64a8 8 0 0 0 8-8a111.73 111.73 0 0 0-64-101.22M128 208a24 24 0 0 1-24-24h48a24 24 0 0 1-24 24m-95.67-40a95.79 95.79 0 0 1 58.75-80.65A8 8 0 0 0 96 80v-8h64v8a8 8 0 0 0 4.92 7.38A95.79 95.79 0 0 1 223.67 168Z"></svg:path>`,
})
export class PhLampPendantIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

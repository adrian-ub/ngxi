import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKnivesIcon],svg[hugeicons-knives-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.5 10l2.602-2.609a2.59 2.59 0 0 0 2.154-.695a2.403 2.403 0 0 0 0-3.476a2.6 2.6 0 0 0-3.59 0L12 7.739"></svg:path><svg:path d="m17 12l1.425-1.455a2.67 2.67 0 0 0 2.298-.782c1.015-1.036 1.012-2.704.13-3.763M13.65 18.463l1.992-1.97c1.239-1.226 1.858-1.84 1.858-2.601c0-.762-.62-1.375-1.858-2.602L13.67 9.34c-1.239-1.227-1.858-1.84-2.628-1.84s-1.39.613-2.628 1.84l-4.825 4.775c-.537.531-.806.797-.948 1.135s-.141.714-.141 1.466v1.105c0 1.734 0 2.601.544 3.14c.545.539 1.42.539 3.173.539h6.472c1.768 0 2.651 0 3.2-.538s.55-1.403.55-3.134v-2.135"></svg:path></svg:g>`,
})
export class HugeiconsKnivesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
